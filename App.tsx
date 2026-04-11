import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Song, TabType } from './types';
import { SONG_DB } from './constants';
import { CHORUS_DB } from './data/chorus_db';
import Layout from './components/Layout';
import SongCard from './components/SongCard';
import SongDetail from './components/SongDetail';
import InfoView from './components/InfoView';
import { Search, ChevronLeft, Tag, Sparkles, X, Mic, MicOff, Home, List, Info, Settings, Heart, ArrowDownAZ, Hash, LogOut, Grip } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toBengaliNumber, latinizeBengali } from './utils/format';
import { MainLogo } from './components/Logo';

import CollectionView from './components/CollectionView';
import SettingsView from './components/SettingsView';
import { SplashScreen } from './components/SplashScreen';
import { ConfirmModal } from './components/ConfirmModal';

const ALL_SONGS: Song[] = [...SONG_DB, ...CHORUS_DB].map(s => {
  let categories: string[] = [];
  if (Array.isArray(s.categories)) {
    categories = s.categories;
  } else if (typeof s.categories === 'string') {
    categories = [s.categories];
  } else if (s.category) {
    categories = [s.category];
  }
  return { ...s, categories };
});

const HeaderNavButton = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) => (
  <button 
    onClick={onClick} 
    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
      active 
        ? 'bg-[var(--bg-card)] text-emerald-600 dark:text-emerald-500 shadow-sm' 
        : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [sortBy, setSortBy] = useState<'number' | 'alphabetical'>('number');
  
  // Settings State
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('jayadhani_lyrics_font_size');
    if (saved) {
      return Math.max(15, parseInt(saved, 10));
    }
    // Default based on screen size: 24px for larger screens, 20px for mobile
    return typeof window !== 'undefined' && window.innerWidth >= 768 ? 24 : 20;
  });
  const [currentFont, setCurrentFont] = useState(() => {
    return localStorage.getItem('jayadhani_font_family') || '"Noto Serif Bengali", "Hind Siliguri", serif';
  });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('jayadhani_dark_mode') === 'true';
  });

  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('jayadhani_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  // Scroll Indicator State
  const [scrollIndicator, setScrollIndicator] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const scrollTimeoutRef = useRef<number | null>(null);

  // Apply Settings
  useEffect(() => {
    localStorage.setItem('jayadhani_lyrics_font_size', fontSize.toString());
    document.documentElement.style.setProperty('--lyrics-font-size', `${fontSize}px`);
    
    // Scale UI font size proportionally but less aggressively
    // Base UI size is roughly 16px when lyrics are 20px
    const uiScale = fontSize / 20;
    const systemFontSize = Math.max(14, Math.min(20, 16 * uiScale));
    document.documentElement.style.setProperty('--system-font-size', `${systemFontSize}px`);
    
    // For the index (song list titles), we can scale it a bit more
    const indexFontSize = Math.max(16, Math.min(24, 18 * uiScale));
    document.documentElement.style.setProperty('--index-font-size', `${indexFontSize}px`);
  }, [fontSize]);

  useEffect(() => {
    localStorage.setItem('jayadhani_font_family', currentFont);
    document.documentElement.style.setProperty('--current-font-family', currentFont);
  }, [currentFont]);

  useEffect(() => {
    localStorage.setItem('jayadhani_dark_mode', isDarkMode.toString());
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle back button and history
  useEffect(() => {
    // Initial state setup
    if (!window.history.state) {
      window.history.replaceState({ view: 'home' }, '');
    } else {
      // Restore state from history on load/refresh
      const state = window.history.state;
      if (state.view === 'song') {
        const song = ALL_SONGS.find(s => s.id === state.songId);
        if (song) setSelectedSong(song);
      } else if (state.view === 'tab') {
        setActiveTab(state.tab);
      }
    }

    const onPopState = (e: PopStateEvent) => {
      const state = e.state;
      if (!state) {
        // If we're on home and there's no state (trying to go back from root)
        if (activeTab === 'home' && !selectedSong) {
          setShowExitConfirm(true);
          // Push state back so they don't actually leave yet
          window.history.pushState({ view: 'home' }, '');
        }
        return;
      }

      if (state.view === 'song') {
        const song = ALL_SONGS.find(s => s.id === state.songId);
        setSelectedSong(song || null);
      } else if (state.view === 'tab') {
        setSelectedSong(null);
        setActiveTab(state.tab);
      } else if (state.view === 'home') {
        setSelectedSong(null);
        setActiveTab('home');
      }
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Scroll Indicator Effect
  useEffect(() => {
    const handleScroll = () => {
      // Only show on home tab and when no song is selected
      if (activeTab !== 'home' || selectedSong) return;

      if (!isDragging) {
        setIsScrolling(true);
        if (scrollTimeoutRef.current) {
          window.clearTimeout(scrollTimeoutRef.current);
        }
        
        scrollTimeoutRef.current = window.setTimeout(() => {
          setIsScrolling(false);
        }, 1500); // Increased timeout for better visibility

        // Calculate scroll percentage
        const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (totalScrollable > 0) {
          setScrollPercent(window.scrollY / totalScrollable);
        }
      }

      // Find visible song
      const cards = document.querySelectorAll('.song-card-item');
      let visibleSongId = '';
      let visibleSongTitle = '';

      for (let i = 0; i < cards.length; i++) {
        const rect = cards[i].getBoundingClientRect();
        // Check if the card is near the top of the viewport
        if (rect.top >= 0 && rect.top <= 300) {
          visibleSongId = cards[i].getAttribute('data-id') || '';
          visibleSongTitle = cards[i].getAttribute('data-title') || '';
          break;
        }
      }

      if (sortBy === 'number' && visibleSongId) {
        setScrollIndicator(toBengaliNumber(parseInt(visibleSongId)));
      } else if (sortBy === 'alphabetical' && visibleSongTitle) {
        setScrollIndicator(visibleSongTitle.charAt(0));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    };
  }, [activeTab, selectedSong, sortBy]);

  // Copy protection
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable Ctrl+C, Ctrl+X, Ctrl+U, Ctrl+S, Ctrl+P, Ctrl+A, F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'x' || e.key === 'u' || e.key === 's' || e.key === 'p' || e.key === 'a')) ||
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
      ) {
        e.preventDefault();
      }
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCopy);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCopy);
    };
  }, []);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab, selectedSong]);

  useEffect(() => {
    localStorage.setItem('jayadhani_favs', JSON.stringify(favorites));
  }, [favorites]);

  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    ALL_SONGS.forEach(s => {
      (s.categories || []).forEach(cat => {
        counts[cat] = (counts[cat] || 0) + 1;
      });
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, []);

  const filteredSongs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    let base = [...ALL_SONGS];
    
    if (q) {
      const bengaliMap: Record<string, string> = { '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9' };
      const englishQuery = q.split('').map(char => bengaliMap[char] || char).join('');
      const isPhoneticSearch = /^[a-z0-9\s]+$/i.test(q);
      const normalizedPhoneticQuery = q.replace(/\s/g, '').replace(/v/g, 'bh').replace(/ph/g, 'f').replace(/ee/g, 'i').replace(/oo/g, 'u').replace(/z/g, 'j');
      
      base = base.filter(s => {
        const titleLower = s.title.toLowerCase();
        const idStr = s.id.toString();

        if (idStr.startsWith(englishQuery)) return true;
        if (titleLower.includes(q)) return true;
        if (s.lyrics.toLowerCase().includes(q)) return true;
        
        if (isPhoneticSearch) {
          if (s.transliteration) {
            const transNormalized = s.transliteration.toLowerCase().replace(/\s/g, '');
            if (transNormalized.includes(normalizedPhoneticQuery)) return true;
          }
          const latinTitleNormalized = latinizeBengali(s.title).replace(/\s/g, '');
          return latinTitleNormalized.includes(normalizedPhoneticQuery);
        }
        return false;
      });
    }

    // Sorting
    if (sortBy === 'alphabetical') {
      return base.sort((a, b) => a.title.localeCompare(b.title, 'bn'));
    } else {
      return base.sort((a, b) => a.id - b.id);
    }
  }, [searchQuery, sortBy]);

  const toggleFavorite = (e: React.MouseEvent | undefined, id: number) => {
    if (e) e.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    searchInputRef.current?.focus();
  };

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('আপনার ব্রাউজার ভয়েস সার্চ সমর্থন করে না।');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'bn-IN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setSearchQuery(transcript);
    };

    recognition.start();
  };

  useEffect(() => {
    // No-op for category cleanup as it's handled in CollectionView
  }, [activeTab]);

  const handleTabChange = (tab: TabType) => {
    if (tab === activeTab && !selectedSong) return;
    window.history.pushState({ view: 'tab', tab }, '');
    setActiveTab(tab);
    setSelectedSong(null);
    setIsScrolling(false);
    setIsDragging(false);
  };

  const handleSelectSong = (song: Song) => {
    window.history.pushState({ view: 'song', songId: song.id }, '');
    setSelectedSong(song);
    setIsScrolling(false);
    setIsDragging(false);
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      if (activeTab === 'home' && !selectedSong) {
        setShowExitConfirm(true);
      } else {
        setSelectedSong(null);
        setActiveTab('home');
      }
    }
  };

  const confirmExit = () => {
    window.location.href = 'about:blank';
  };

  if (selectedSong) {
    return (
      <SongDetail 
        song={selectedSong} 
        onBack={handleBack} 
        onOpenSettings={() => {
          // This will now be handled internally in SongDetail as a popup
        }}
        isFavorite={favorites.includes(selectedSong.id)}
        onToggleFavorite={() => toggleFavorite(undefined, selectedSong.id)}
        globalFontSize={fontSize}
        globalFontFamily={currentFont}
        setFontSize={setFontSize}
        setCurrentFont={setCurrentFont}
      />
    );
  }

  const renderContent = () => {
    if (activeTab === 'settings') {
      return (
        <SettingsView 
          fontSize={fontSize}
          setFontSize={setFontSize}
          currentFont={currentFont}
          setCurrentFont={setCurrentFont}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      );
    }
    
    if (activeTab === 'info') {
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <InfoView />
        </div>
      );
    }
    
    if (activeTab === 'collection' && !searchQuery) {
      return (
        <CollectionView 
          songs={ALL_SONGS}
          favorites={favorites}
          categories={categories}
          onSelectSong={handleSelectSong}
          onToggleFavorite={toggleFavorite}
        />
      );
    }

    return (
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 border-b-2 border-emerald-500/20 pb-1.5 font-bengali">
            {searchQuery ? 'অনুসন্ধানের ফলাফল' : 'সূচী'}
          </h2>
          <button 
            onClick={() => setSortBy(prev => prev === 'number' ? 'alphabetical' : 'number')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all font-bengali"
          >
            {sortBy === 'number' ? <ArrowDownAZ className="w-4 h-4" /> : <Hash className="w-4 h-4" />}
            <span>{sortBy === 'number' ? 'বর্ণানুক্রমিক' : 'নম্বর অনুযায়ী'}</span>
          </button>
        </div>

        {filteredSongs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSongs.map(song => (
              <div 
                key={song.id} 
                className="song-card-item" 
                data-id={song.id} 
                data-title={song.title}
              >
                <SongCard 
                  song={song} 
                  isFavorite={favorites.includes(song.id)}
                  onToggleFavorite={(e) => toggleFavorite(e, song.id)}
                  onClick={() => handleSelectSong(song)}
                  showCategory={activeTab !== 'home'}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-slate-400 font-medium flex flex-col items-center gap-4">
            <Sparkles className="w-8 h-8 opacity-20" />
            গান খুঁজে পাওয়া যায়নি।
          </div>
        )}
      </div>
    );
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={handleTabChange}>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <header className="bg-[var(--bg-card)] border-b border-[var(--border-color)] sticky top-0 z-30 pt-4 pb-2 transition-colors">
        <div className="px-6 py-2 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 relative">
          <div className="flex items-center gap-4">
            <MainLogo className="w-12 h-12 shadow-lg rounded-[1.1rem] overflow-hidden shrink-0" />
            <div className="flex flex-col justify-between h-12 py-0.5 items-center">
              <h1 className="text-4xl font-black text-brand font-logo tracking-tight leading-none">জয়ধ্বনি</h1>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.25em]">বাংলা খ্রীষ্টিয় সংগীত</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-1 bg-slate-50 dark:bg-slate-800 p-1 rounded-2xl border border-slate-100 dark:border-slate-700">
            <HeaderNavButton active={activeTab === 'home'} onClick={() => handleTabChange('home')} icon={<Home className="w-4 h-4" />} label="সূচী" />
            <HeaderNavButton active={activeTab === 'collection'} onClick={() => handleTabChange('collection')} icon={<List className="w-4 h-4" />} label="সংগ্রহ" />
            <HeaderNavButton active={activeTab === 'settings'} onClick={() => handleTabChange('settings')} icon={<Settings className="w-4 h-4" />} label="সেটিংস" />
            <HeaderNavButton active={activeTab === 'info'} onClick={() => handleTabChange('info')} icon={<Info className="w-4 h-4" />} label="তথ্য" />
            <button 
              onClick={handleBack}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-all ml-2"
            >
              <LogOut className="w-4 h-4" />
              <span>প্রস্থান</span>
            </button>
          </div>
        </div>
        
        {activeTab !== 'settings' && (
          <div className="px-4 pt-2 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute left-4 inset-y-0 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-slate-300 dark:text-slate-600 group-focus-within:text-emerald-500 transition-colors" />
              </div>
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="গানের নাম বা নম্বর দিয়ে খুঁজুন..." 
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 py-2 pl-12 pr-10 rounded-xl text-sm font-medium outline-none focus:border-emerald-300 dark:focus:border-emerald-500 focus:bg-white dark:focus:bg-slate-900 transition-all font-bengali text-[var(--text-main)]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="absolute right-4 inset-y-0 flex items-center gap-1">
                <div className="relative">
                  <AnimatePresence>
                    {isListening && (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 0.3 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                        className="absolute inset-0 bg-rose-500 rounded-full"
                      />
                    )}
                  </AnimatePresence>
                  <button
                    onClick={startListening}
                    className={`relative p-1.5 rounded-lg transition-all z-10 ${
                      isListening 
                        ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30' 
                        : 'text-slate-300 dark:text-slate-600 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                    }`}
                    aria-label="Voice search"
                    title="ভয়েস সার্চ"
                  >
                    {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </button>
                </div>
                {searchQuery && (
                  <button 
                    onClick={handleClearSearch}
                    className="p-1.5 text-slate-300 dark:text-slate-600 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg transition-all animate-in fade-in zoom-in duration-200"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto py-6 font-bengali">
        {renderContent()}
      </main>

      <footer className="hidden md:block max-w-6xl mx-auto px-6 py-8 border-t border-[var(--border-color)] mt-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MainLogo className="w-8 h-8 opacity-50 grayscale" />
            <p className="text-xs font-bold text-slate-400 dark:text-slate-300 uppercase tracking-widest">জয়ধ্বনি © {toBengaliNumber('২০২৬')}</p>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => handleTabChange('info')}
              className="text-xs font-bold text-slate-400 dark:text-slate-300 hover:text-emerald-600 transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              <Info className="w-4 h-4" />
              তথ্য ও পরিচিতি
            </button>
            <button 
              onClick={() => handleTabChange('settings')}
              className="text-xs font-bold text-slate-400 dark:text-slate-300 hover:text-emerald-600 transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              সেটিংস
            </button>
          </div>
        </div>
      </footer>

      {/* Scroll Indicator Badge */}
      <AnimatePresence>
        {(isScrolling || isDragging) && scrollIndicator && (
          <motion.div 
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0}
            onDragStart={() => {
              setIsDragging(true);
              if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
            }}
            onDragEnd={() => {
              setIsDragging(false);
              scrollTimeoutRef.current = window.setTimeout(() => {
                setIsScrolling(false);
              }, 1500);
            }}
            onDrag={(e, info) => {
              const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
              // Calculate scroll based on drag delta
              // The handle moves 90% of the screen height for 100% of the scroll
              const scrollFactor = totalScrollable / (window.innerHeight * 0.9);
              window.scrollBy(0, info.delta.y * scrollFactor);
              
              // Update percent manually while dragging for smooth visual feedback
              const newPercent = window.scrollY / totalScrollable;
              setScrollPercent(newPercent);
            }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              top: `${5 + (scrollPercent * 90)}%` 
            }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ 
              top: isDragging ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 40, mass: 0.5 },
              opacity: { duration: 0.2 }
            }}
            className="fixed right-0 z-[60] flex items-center gap-3 select-none touch-none pointer-events-auto"
          >
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-4 py-2 rounded-full shadow-xl flex items-center justify-center font-bold text-lg text-slate-600 dark:text-slate-200 min-w-[50px] font-bengali pointer-events-none">
              {scrollIndicator}
            </div>
            
            <div className="w-12 h-12 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full shadow-2xl flex items-center justify-center text-slate-500 dark:text-slate-300 -mr-6 cursor-ns-resize active:scale-95 transition-transform pointer-events-auto">
              <Grip className="w-6 h-6" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ConfirmModal
        isOpen={showExitConfirm}
        onClose={() => setShowExitConfirm(false)}
        onConfirm={confirmExit}
        title="আপনি কি প্রস্থান করতে চান?"
        message="অ্যাপ থেকে প্রস্থান করলে আপনার বর্তমান সেশনটি বন্ধ হয়ে যাবে।"
        confirmText="হ্যাঁ, প্রস্থান করুন"
        cancelText="না, ফিরে যান"
      />
    </Layout>
  );
};

export default App;
