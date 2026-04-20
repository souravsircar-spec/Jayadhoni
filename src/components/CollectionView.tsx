import React, { useState } from 'react';
import { Song } from '../types';
import { Tag, Heart, ChevronRight, Search, Sparkles, Music } from 'lucide-react';
import { toBengaliNumber } from '../utils/format';
import SongCard from './SongCard';

interface CollectionViewProps {
  songs: Song[];
  favorites: number[];
  categories: { name: string, count: number }[];
  onSelectSong: (song: Song) => void;
  onToggleFavorite: (e: React.MouseEvent | undefined, id: number) => void;
}

const CollectionView: React.FC<CollectionViewProps> = ({
  songs,
  favorites,
  categories,
  onSelectSong,
  onToggleFavorite
}) => {
  const [view, setView] = useState<'main' | 'category' | 'favorites'>('main');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const favoriteSongs = songs.filter(s => favorites.includes(s.id));
  const categorySongs = selectedCategory ? songs.filter(s => (s.categories || []).includes(selectedCategory)) : [];

  if (view === 'favorites') {
    return (
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 px-4">
        <header className="flex flex-col items-center gap-2 mb-4">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setView('main')}
              className="p-1.5 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <h2 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-1.5 font-bengali">প্রিয় গানসমূহ</h2>
          </div>
        </header>

        {favoriteSongs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {favoriteSongs.map(song => (
              <SongCard 
                key={song.id} 
                song={song} 
                isFavorite={true}
                onToggleFavorite={(e) => onToggleFavorite(e, song.id)}
                onClick={() => onSelectSong(song)}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-slate-400 font-medium flex flex-col items-center gap-4">
            <Heart className="w-12 h-12 opacity-20" />
            <p className="font-bengali">এখনও কোনো গান প্রিয় তালিকায় যুক্ত করা হয়নি।</p>
          </div>
        )}
      </div>
    );
  }

  if (view === 'category' && selectedCategory) {
    return (
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 px-4">
        <header className="flex flex-col items-center gap-2 mb-4">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => { setView('main'); setSelectedCategory(null); }}
              className="p-1.5 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <h2 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-1.5 font-bengali">{selectedCategory}</h2>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {categorySongs.map(song => (
            <SongCard 
              key={song.id} 
              song={song} 
              isFavorite={favorites.includes(song.id)}
              onToggleFavorite={(e) => onToggleFavorite(e, song.id)}
              onClick={() => onSelectSong(song)}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 px-4">
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-1.5 font-bengali transition-colors">সংগ্রহ</h2>
      </div>

      {/* Favorites Shortcut */}
      <section className="space-y-3">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">সংরক্ষিত</h3>
        <button 
          onClick={() => setView('favorites')}
          className="w-full bg-white p-4 rounded-3xl border border-slate-100 text-left hover:border-rose-200 hover:shadow-xl hover:shadow-rose-500/5 transition-all group active:scale-[0.98] flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 bg-rose-50 rounded-2xl text-rose-500 group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 font-bengali group-hover:text-rose-600 transition-colors">
                প্রিয় গানসমূহ
              </h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                {toBengaliNumber(favorites.length)} টি গান
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-300" />
        </button>
      </section>

      <section className="space-y-4">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2 font-sans">বিষয়ভিত্তিক বিভাগ</h3>
        <div className="space-y-3 px-2">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => { setSelectedCategory(cat.name); setView('category'); }}
              className="w-full bg-white p-4 rounded-3xl border border-slate-100 text-left hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group active:scale-[0.98] flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-500 group-hover:scale-110 transition-transform">
                  <Music className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 font-bengali group-hover:text-emerald-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">
                    {toBengaliNumber(cat.count)} টি গান
                  </p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 transition-colors" />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CollectionView;
