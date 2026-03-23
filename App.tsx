import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Song, TabType } from './types';
import { SONG_DB } from './constants';
import { CHORUS_DB } from './chorus_db';
import Layout from './components/Layout';
import SongCard from './components/SongCard';
import SongDetail from './components/SongDetail';
import InfoView from './components/InfoView';
import { Search, ChevronLeft, Tag, Sparkles, X, Mic, MicOff, Home, List, Info, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toBengaliNumber, latinizeBengali } from './utils/format';
import { MainLogo } from './components/Logo';

const ALL_SONGS: Song[] = [...SONG_DB, ...CHORUS_DB].map(s => ({
  ...s,
  categories: s.categories || (s.category ? [s.category] : [])
}));

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
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('jayadhani_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const searchInputRef = useRef<HTMLInputElement>(null);

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
      } else if (state.view === 'category') {
        setSelectedCategory(state.category);
        setActiveTab('category');
      } else if (state.view === 'tab') {
        setActiveTab(state.tab);
      }
    }

    const onPopState = (e: PopStateEvent) => {
      const state = e.state;
      if (!state) return;

      if (state.view === 'song') {
        const song = ALL_SONGS.find(s => s.id === state.songId);
        setSelectedSong(song || null);
      } else if (state.view === 'category') {
        setSelectedSong(null);
        setSelectedCategory(state.category);
        setActiveTab('category');
      } else if (state.view === 'tab') {
        setSelectedSong(null);
        setSelectedCategory(null);
        setActiveTab(state.tab);
      } else if (state.view === 'home') {
        setSelectedSong(null);
        setSelectedCategory(null);
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
  }, [activeTab, selectedSong, selectedCategory]);

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
    let base = ALL_SONGS;
    
    if (activeTab === 'category' && selectedCategory) {
      base = ALL_SONGS.filter(s => (s.categories || []).includes(selectedCategory));
    } else if (activeTab === 'fav') {
      base = ALL_SONGS.filter(s => favorites.includes(s.id));
    }

    if (!q) return base;
    
    const bengaliMap: Record<string, string> = { '০': '0', '১': '1', '২': '2', '৩': '3', '৪': '4', '৫': '5', '৬': '6', '৭': '7', '৮': '8', '৯': '9' };
    const englishQuery = q.split('').map(char => bengaliMap[char] || char).join('');
    const isPhoneticSearch = /^[a-z0-9\s]+$/i.test(q);
    const normalizedPhoneticQuery = q.replace(/\s/g, '').replace(/v/g, 'bh').replace(/ph/g, 'f').replace(/ee/g, 'i').replace(/oo/g, 'u').replace(/z/g, 'j');
    
    return base.filter(s => {
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
  }, [searchQuery, activeTab, selectedCategory, favorites]);

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
    if (activeTab !== 'category') setSelectedCategory(null);
  }, [activeTab]);

  const handleTabChange = (tab: TabType) => {
    if (tab === activeTab && !selectedSong && !selectedCategory) return;
    window.history.pushState({ view: 'tab', tab }, '');
    setActiveTab(tab);
    setSelectedSong(null);
    setSelectedCategory(null);
  };

  const handleSelectSong = (song: Song) => {
    window.history.pushState({ view: 'song', songId: song.id }, '');
    setSelectedSong(song);
  };

  const handleSelectCategory = (catName: string) => {
    window.history.pushState({ view: 'category', category: catName }, '');
    setSelectedCategory(catName);
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      setSelectedSong(null);
      setSelectedCategory(null);
      setActiveTab('home');
    }
  };

  if (selectedSong) {
    return (
      <SongDetail 
        song={selectedSong} 
        onBack={handleBack} 
        isFavorite={favorites.includes(selectedSong.id)}
        onToggleFavorite={() => toggleFavorite(undefined, selectedSong.id)}
      />
    );
  }

  const renderContent = () => {
    if (activeTab === 'info') return <InfoView />;
    
    if (activeTab === 'category' && !selectedCategory && !searchQuery) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 px-4">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => handleSelectCategory(cat.name)}
              className="bg-white p-6 rounded-[2.5rem] border border-slate-100 text-left hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group active:scale-[0.98]"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-500 group-hover:scale-110 transition-transform">
                  <Tag className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest font-sans">
                  {toBengaliNumber(cat.count)} Songs
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 font-bengali group-hover:text-emerald-600 transition-colors">
                {cat.name}
              </h3>
            </button>
          ))}
        </div>
      );
    }

    return (
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 px-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {activeTab === 'category' && selectedCategory && !searchQuery && (
              <button onClick={handleBack} className="p-1 hover:bg-slate-100 rounded-lg text-slate-400">
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
              {activeTab === 'fav' ? 'সংরক্ষিত গান' : activeTab === 'category' && selectedCategory ? selectedCategory : 'সংকলন'}
            </h2>
          </div>
        </div>

        {filteredSongs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
      <header className="bg-white border-b border-slate-100 sticky top-0 z-30 pb-4">
        <div className="px-6 py-8 pb-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative">
          <div className="flex items-center gap-5">
            <MainLogo className="w-14 h-14 shadow-xl rounded-[1.25rem] overflow-hidden shrink-0" />
            <div className="text-left">
              <h1 className="text-4xl font-black text-brand font-bengali tracking-tight leading-none">জয়ধ্বনি</h1>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] mt-1.5">বাংলা খ্রীষ্টিয় সংগীত</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-1 bg-slate-50 p-1 rounded-2xl border border-slate-100">
            <HeaderNavButton active={activeTab === 'home'} onClick={() => handleTabChange('home')} icon={<Home className="w-4 h-4" />} label="সূচী" />
            <HeaderNavButton active={activeTab === 'category'} onClick={() => handleTabChange('category')} icon={<List className="w-4 h-4" />} label="বিষয়" />
            <HeaderNavButton active={activeTab === 'fav'} onClick={() => handleTabChange('fav')} icon={<Heart className="w-4 h-4" />} label="প্রিয়" />
            <HeaderNavButton active={activeTab === 'info'} onClick={() => handleTabChange('info')} icon={<Info className="w-4 h-4" />} label="তথ্য" />
          </div>
        </div>
        
        {activeTab !== 'info' && (
          <div className="px-4 pt-2 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute left-5 inset-y-0 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-slate-300 group-focus-within:text-emerald-500 transition-colors" />
              </div>
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="গানের নাম বা নম্বর দিয়ে খুঁজুন..." 
                className="w-full bg-slate-50 border border-slate-200 py-3 pl-14 pr-12 rounded-2xl text-sm font-medium outline-none focus:border-emerald-300 focus:bg-white transition-all font-bengali"
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
    </Layout>
  );
};

export default App;
