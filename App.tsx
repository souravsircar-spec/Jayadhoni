import React, { useState, useMemo, useEffect, useRef } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Song, TabType } from './types';
import { SONG_DB } from './constants';
import { CHORUS_DB } from './chorus_db';
import Layout from './components/Layout';
import SongCard from './components/SongCard';
import SongDetail from './components/SongDetail';
import InfoView from './components/InfoView';
import { Search, ChevronLeft, Tag, Sparkles, X } from 'lucide-react';
import { toBengaliNumber, latinizeBengali } from './utils/format';

const ALL_SONGS = [...SONG_DB, ...CHORUS_DB];

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [selectedSong, setSelectedSong] = useState<Song | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem('jayadhani_favs');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const searchInputRef = useRef<HTMLInputElement>(null);

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
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return Object.entries(counts).map(([name, count]) => ({ name, count }));
  }, []);

  const filteredSongs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    let base = ALL_SONGS;
    
    if (activeTab === 'category' && selectedCategory) {
      base = ALL_SONGS.filter(s => s.category === selectedCategory);
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

  useEffect(() => {
    if (activeTab !== 'category') setSelectedCategory(null);
  }, [activeTab]);

  if (selectedSong) {
    return (
      <SongDetail 
        song={selectedSong} 
        onBack={() => setSelectedSong(null)} 
        isFavorite={favorites.includes(selectedSong.id)}
        onToggleFavorite={() => toggleFavorite(undefined, selectedSong.id)}
      />
    );
  }

  const renderContent = () => {
    if (activeTab === 'info') return <InfoView />;
    
    if (activeTab === 'category' && !selectedCategory && !searchQuery) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 px-4">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
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
              <button onClick={() => setSelectedCategory(null)} className="p-1 hover:bg-slate-100 rounded-lg text-slate-400">
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
              {activeTab === 'fav' ? 'সংরক্ষিত গান' : activeTab === 'category' && selectedCategory ? selectedCategory : 'সংকলন'}
            </h2>
          </div>
        </div>

        {filteredSongs.length > 0 ? (
          <div className="space-y-3">
            {filteredSongs.map(song => (
              <SongCard 
                key={song.id} 
                song={song} 
                isFavorite={favorites.includes(song.id)}
                onToggleFavorite={(e) => toggleFavorite(e, song.id)}
                onClick={() => setSelectedSong(song)}
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
    <>
      <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
        <header className="bg-white border-b border-slate-100 sticky top-0 z-30 pb-4">
        <div className="p-8 pb-4 max-w-2xl mx-auto flex flex-col items-center text-center relative">
          <h1 className="text-4xl font-black text-emerald-600 font-bengali tracking-tight">জয়ধ্বনি</h1>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1">বাংলা খ্রীষ্টিয় সংগীত</p>
        </div>
        
        {activeTab !== 'info' && (
          <div className="px-4 pt-2 max-w-2xl mx-auto">
            <div className="relative group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-emerald-500 transition-colors pointer-events-none" />
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="গানের নাম বা নম্বর দিয়ে খুঁজুন..." 
                className="w-full bg-slate-50 border border-slate-200 py-3 pl-14 pr-12 rounded-2xl text-sm font-medium outline-none focus:border-emerald-300 focus:bg-white transition-all font-bengali"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  onClick={handleClearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-slate-300 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-all animate-in fade-in zoom-in duration-200"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}
      </header>

        <main className="max-w-2xl mx-auto py-6 font-bengali">
          {renderContent()}
        </main>
      </Layout>
      <SpeedInsights />
    </>
  );
};

export default App;
