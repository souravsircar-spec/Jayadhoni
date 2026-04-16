import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Song, TabType } from './types';
import { SONG_DB } from './constants';
import { CHORUS_DB } from './chorus_db';
import Layout from './components/Layout';
import SongCard from './components/SongCard';
import SongDetail from './components/SongDetail';
import InfoView from './components/InfoView';
import { Search, ChevronLeft, Tag, Sparkles, X, Mic, MicOff, Home, List, Info, Settings, Heart, ArrowDownAZ, Hash } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toBengaliNumber, latinizeBengali } from './utils/format';
import { MainLogo } from './components/Logo';

// 1. Setup Web Speech API (The "Xiaomi-Proof" method)
const getSpeechRecognition = () => {
  const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
  if (!SpeechRecognition) return null;

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'bn-IN';
  return recognition;
};

let recognition: any = null;
try {
  recognition = getSpeechRecognition();
} catch (e) {
  console.error("Speech Recognition initialization failed:", e);
}

import CollectionView from './components/CollectionView';
import SettingsView from './components/SettingsView';
import { SplashScreen } from './components/SplashScreen';

import { App as CapApp } from '@capacitor/app';
import { Dialog } from '@capacitor/dialog';

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
        ? 'bg-[var(--bg-card)] text-emerald-600 shadow-sm' 
        : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
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
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>(() => {
    return (localStorage.getItem('jayadhani_theme') as 'light' | 'dark' | 'system') || 'system';
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

  // Apply Theme
  useEffect(() => {
    localStorage.setItem('jayadhani_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.remove('dark', 'light');
    }
  }, [theme]);

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

  // Handle Hardware Back Button
  useEffect(() => {
    const handleBackButton = async () => {
      if (selectedSong) {
        handleBack();
      } else if (activeTab !== 'home') {
        handleTabChange('home');
      } else {
        const { value } = await Dialog.confirm({
          title: 'প্রস্থান',
          message: 'আপনি কি জয়ধ্বনি অ্যাপ থেকে প্রস্থান করতে চান?',
          okButtonTitle: 'না',
          cancelButtonTitle: 'হ্যাঁ',
        });

        if (!value) {
          CapApp.exitApp();
        }
      }
    };

    const backButtonListener = CapApp.addListener('backButton', () => {
      handleBackButton();
    });

    return () => {
      backButtonListener.then(l => l.remove());
    };
  }, [selectedSong, activeTab]);

  // Pre-request permissions on mount
  useEffect(() => {
    const requestNativePermission = async () => {
      // In Capacitor, we can use a trick to trigger the native permission dialog
      // for the Web Speech API by using any plugin that requires record_audio
      // or by simply checking the navigator.mediaDevices (though it's tricky in WebView)
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
      } catch (e) {
        console.warn('Native mic permission request failed (Normal if already granted):', e);
      }
    };
    requestNativePermission();

    if (!recognition) return;

    recognition.onresult = (event: any) => {
      let text = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i][0].confidence > 0.1) {
          text = event.results[i][0].transcript;
        }
      }

      if (text) {
        setSearchQuery(text);
        if (searchInputRef.current) {
          searchInputRef.current.value = text;
          searchInputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
    };

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = (event: any) => {
      console.error('Speech recognition error', event.error);
      setIsListening(false);
    };

    return () => {
      recognition.stop();
    };
  }, []);

  const startListening = () => {
    if (!recognition) {
      alert("ভয়েস সার্চ এই ডিভাইসে সাপোর্ট করছে না।");
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      try {
        setSearchQuery("");
        recognition.start();
      } catch (e) {
        console.error("Recognition start error:", e);
      }
    }
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
      if (activeTab !== 'home') {
        setActiveTab('home');
      }
      setSelectedSong(null);
    }
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
          theme={theme}
          setTheme={setTheme}
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
          <h2 className="text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-1.5 font-bengali">
            {searchQuery ? 'অনুসন্ধানের ফলাফল' : 'সূচী'}
          </h2>
          <button 
            onClick={() => setSortBy(prev => prev === 'number' ? 'alphabetical' : 'number')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold hover:bg-slate-200 transition-all font-bengali"
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

      <header className="bg-[var(--header-bg)] border-b border-[var(--border-color)] sticky top-0 z-30 pb-2 transition-colors" style={{ paddingTop: 'calc(1rem + env(safe-area-inset-top))' }}>
        <div className="px-6 py-2 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 relative">
          <div className="flex items-center gap-4">
            <MainLogo className="w-12 h-12 shadow-lg rounded-[1.1rem] overflow-hidden shrink-0" />
            <div className="flex flex-col justify-between h-12 py-0.5 items-center">
              <h1 className="text-4xl font-black text-brand font-logo tracking-tight leading-none">জয়ধ্বনি</h1>
              <p className="text-[10px] font-bold text-[var(--text-muted)] uppercase tracking-[0.25em]">বাংলা খ্রীষ্টিয় সংগীত</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-1 bg-[var(--bg-input)] p-1 rounded-2xl border border-[var(--border-color)]">
            <HeaderNavButton active={activeTab === 'home'} onClick={() => handleTabChange('home')} icon={<Home className="w-4 h-4" />} label="সূচী" />
            <HeaderNavButton active={activeTab === 'collection'} onClick={() => handleTabChange('collection')} icon={<List className="w-4 h-4" />} label="সংগ্রহ" />
            <HeaderNavButton active={activeTab === 'settings'} onClick={() => handleTabChange('settings')} icon={<Settings className="w-4 h-4" />} label="সেটিংস" />
            <HeaderNavButton active={activeTab === 'info'} onClick={() => handleTabChange('info')} icon={<Info className="w-4 h-4" />} label="তথ্য" />
          </div>
        </div>
        
        {activeTab !== 'settings' && activeTab !== 'info' && (
          <div className="px-4 pt-2 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute left-4 inset-y-0 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-[var(--text-muted)] group-focus-within:text-emerald-500 transition-colors" />
              </div>
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="গানের নাম বা নম্বর দিয়ে খুঁজুন..." 
                className="w-full bg-[var(--bg-input)] border border-[var(--border-color)] py-2 pl-12 pr-10 rounded-xl text-sm font-medium outline-none focus:border-emerald-300 focus:bg-[var(--bg-card)] transition-all font-bengali text-[var(--text-main)]"
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
                        : 'text-[var(--text-muted)] hover:text-emerald-500 hover:bg-emerald-50'
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
                    className="p-1.5 text-[var(--text-muted)] hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all animate-in fade-in zoom-in duration-200"
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
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">জয়ধ্বনি © {toBengaliNumber('২০২৬')}</p>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => handleTabChange('info')}
              className="text-xs font-bold text-slate-400 hover:text-emerald-600 transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              <Info className="w-4 h-4" />
              তথ্য ও পরিচিতি
            </button>
            <button 
              onClick={() => handleTabChange('settings')}
              className="text-xs font-bold text-slate-400 hover:text-emerald-600 transition-colors uppercase tracking-widest flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              সেটিংস
            </button>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default App;
