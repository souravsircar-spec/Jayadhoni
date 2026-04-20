import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Song, TabType } from './types';
import { SONG_DB } from './constants';
import { CHORUS_DB } from './data/chorus_db';
import Layout from './components/Layout';
import SongCard from './components/SongCard';
import SongDetail from './components/SongDetail';
import InfoView from './components/InfoView';
import { Search, ChevronLeft, Sparkles, X, Mic, MicOff, Home, List, Info, Heart, ArrowDownAZ, Hash, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toBengaliNumber, latinizeBengali } from './utils/format';
import { MainLogo } from './components/Logo';

import CollectionView from './components/CollectionView';
import SettingsView from './components/SettingsView';
import { SplashScreen } from './components/SplashScreen';
import { ConfirmModal } from './components/ConfirmModal';

const ALL_SONGS: Song[] = SONG_DB.map(s => {
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
        ? 'bg-white text-emerald-600 shadow-sm' 
        : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'
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

  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('jayadhani_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const searchInputRef = useRef<HTMLInputElement>(null);
  const activeTabRef = useRef<TabType>(activeTab);
  const selectedSongRef = useRef<Song | null>(selectedSong);

  useEffect(() => {
    activeTabRef.current = activeTab;
  }, [activeTab]);

  useEffect(() => {
    selectedSongRef.current = selectedSong;
  }, [selectedSong]);

  useEffect(() => {
    // Firebase tracking removed
  }, []);

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
      
      // If we are on home screen and hit back (state is null or not our app state)
      if (!state || state.view === undefined) {
        if (activeTabRef.current === 'home' && !selectedSongRef.current) {
          setShowExitConfirm(true);
          // Push home state back so they don't actually leave
          window.history.pushState({ view: 'home' }, '');
          return;
        }
        // If they were on another tab or song, go back to home
        setSelectedSong(null);
        setActiveTab('home');
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
      // Helper to strip special characters and spaces for robust matching
      const stripSpecial = (str: string) => str.toLowerCase().replace(/[,\.!?\-_\(\):;|।"'\s]/g, '');
      
      const normalizedQuery = stripSpecial(q);
      const bengaliMap: Record<string, string> = { '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9' };
      const englishQuery = q.split('').map(char => bengaliMap[char] || char).join('');
      const isPhoneticSearch = /^[a-z0-9\s]+$/i.test(q);
      const normalizedPhoneticQuery = q.replace(/\s/g, '').replace(/v/g, 'bh').replace(/ph/g, 'f').replace(/ee/g, 'i').replace(/oo/g, 'u').replace(/z/g, 'j');
      
      base = base.filter(s => {
        const titleNormalized = stripSpecial(s.title);
        const idStr = s.id.toString();

        if (idStr.startsWith(englishQuery)) return true;
        if (titleNormalized.includes(normalizedQuery)) return true;
        
        // Lyrics search also ignores special characters
        const lyricsNormalized = stripSpecial(s.lyrics);
        if (lyricsNormalized.includes(normalizedQuery)) return true;
        
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
  };

  const handleSelectSong = (song: Song) => {
    window.history.pushState({ view: 'song', songId: song.id }, '');
    setSelectedSong(song);
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setSelectedSong(null);
      setActiveTab('home');
    }
  };

  const confirmExit = () => {
    // In a real app, this might close the app or redirect
    // For web, we can redirect to a blank page or show a goodbye message
    window.location.href = 'about:blank';
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  const goToNextSong = () => {
    if (!selectedSong) return;
    const currentIndex = ALL_SONGS.findIndex(s => s.id === selectedSong.id);
    if (currentIndex < ALL_SONGS.length - 1) {
      handleSelectSong(ALL_SONGS[currentIndex + 1]);
    }
  };

  const goToPreviousSong = () => {
    if (!selectedSong) return;
    const currentIndex = ALL_SONGS.findIndex(s => s.id === selectedSong.id);
    if (currentIndex > 0) {
      handleSelectSong(ALL_SONGS[currentIndex - 1]);
    }
  };

  const handleGoHome = () => {
    setSelectedSong(null);
    setActiveTab('home');
    window.history.pushState({ view: 'home' }, '');
  };

  if (selectedSong) {
    const currentIndex = ALL_SONGS.findIndex(s => s.id === selectedSong.id);
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
        onNext={currentIndex < ALL_SONGS.length - 1 ? goToNextSong : undefined}
        onPrevious={currentIndex > 0 ? goToPreviousSong : undefined}
        onGoHome={handleGoHome}
      />
    );
  }

  const renderContent = () => {
    if (activeTab === 'info') {
      return (
        <InfoView />
      );
    }

    if (activeTab === 'settings') {
      return (
        <SettingsView 
          fontSize={fontSize}
          setFontSize={setFontSize}
          currentFont={currentFont}
          setCurrentFont={setCurrentFont}
        />
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
      <div className="space-y-2 animate-in fade-in slide-in-from-bottom-4 duration-500 px-4">
        <div className="flex items-center justify-between mb-4 border-b border-emerald-500/10 pb-2">
          <h2 className="text-xl font-black text-slate-800 relative font-bengali">
            {searchQuery ? 'অনুসন্ধানের ফলাফল' : 'সূচী'}
            {!searchQuery && (
              <div className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-12 h-1 bg-emerald-500 rounded-full" />
            )}
          </h2>
          <button 
            onClick={() => setSortBy(prev => prev === 'number' ? 'alphabetical' : 'number')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 text-slate-600 text-xs font-bold hover:bg-slate-200 transition-all font-bengali border border-transparent"
          >
            {sortBy === 'number' ? <ArrowDownAZ className="w-4 h-4" /> : <Hash className="w-4 h-4" />}
            <span>{sortBy === 'number' ? 'বর্ণানুক্রমিক' : 'নম্বর অনুযায়ী'}</span>
          </button>
        </div>

        {filteredSongs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {filteredSongs.map(song => (
              <SongCard 
                key={song.id} 
                song={song} 
                isFavorite={favorites.includes(song.id)}
                onToggleFavorite={(e) => toggleFavorite(e, song.id)}
                onClick={() => handleSelectSong(song)}
              />
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
      <header className="bg-white border-b border-slate-100 sticky top-0 z-30 pb-2 transition-colors">
        <div className="px-6 py-2 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 relative">
          <div className="flex items-center gap-4">
            <MainLogo className="w-12 h-12 shadow-lg rounded-[1.1rem] overflow-hidden shrink-0 border border-emerald-500/10" />
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-black text-brand font-logo tracking-tight leading-none">জয়ধ্বনি</h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] mt-1.5 text-center ml-[0.25em]">বাংলা খ্রীষ্টিয় সংগীত</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-1 bg-slate-50 p-1 rounded-2xl border border-slate-100 transition-colors">
            <HeaderNavButton active={activeTab === 'home'} onClick={() => handleTabChange('home')} icon={<Home className="w-4 h-4" />} label="সূচী" />
            <HeaderNavButton active={activeTab === 'collection'} onClick={() => handleTabChange('collection')} icon={<List className="w-4 h-4" />} label="সংগ্রহ" />
            <HeaderNavButton active={activeTab === 'info'} onClick={() => handleTabChange('info')} icon={<Info className="w-4 h-4" />} label="তথ্য" />
            <HeaderNavButton active={activeTab === 'settings'} onClick={() => handleTabChange('settings')} icon={<Settings className="w-4 h-4" />} label="সেটিংস" />
          </div>
        </div>
        
        {activeTab !== 'settings' && activeTab !== 'info' && (
          <div className="px-4 pt-2 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute left-4 inset-y-0 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-slate-300 group-focus-within:text-emerald-500 transition-colors" />
              </div>
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="গানের নাম বা নম্বর দিয়ে খুঁজুন..." 
                className="w-full bg-slate-50 border border-slate-200 py-2 pl-12 pr-10 rounded-xl text-sm font-medium outline-none focus:border-emerald-300 focus:bg-white transition-all font-bengali text-slate-800"
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
                        : 'text-slate-300 hover:text-emerald-500 hover:bg-emerald-50'
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
                    className="p-1.5 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all animate-in fade-in zoom-in duration-200"
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
