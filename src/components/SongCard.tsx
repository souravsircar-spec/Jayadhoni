import React from 'react';
import { Song } from '../types';
import { Heart, User } from 'lucide-react';
import { toBengaliNumber } from '../utils/format';

interface SongCardProps {
  song: Song;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent) => void;
  onClick: () => void;
}

const SongCard: React.FC<SongCardProps> = ({ song, isFavorite, onToggleFavorite, onClick }) => {
  const renderTitle = (title: string) => {
    const match = title.match(/^(.*?)\s*\((.*)\)$/);
    if (match) {
      return match[1];
    }
    return title;
  };

  return (
    <div 
      onClick={onClick}
      className="group relative bg-white p-2 rounded-2xl border border-slate-100 flex items-center gap-3 cursor-pointer transition-all hover:shadow-xl hover:shadow-emerald-500/5 active:scale-[0.98]"
    >
      <div 
        onClick={onToggleFavorite}
        className="relative shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center overflow-hidden transition-all hover:scale-105 active:scale-95 group/heart border border-emerald-100"
        title={isFavorite ? "পছন্দ থেকে সরান" : "পছন্দ হিসেবে রাখুন"}
      >
        <Heart 
          className={`absolute w-8 h-8 transition-all duration-500 ${
            isFavorite 
              ? 'text-rose-500/20 fill-rose-500/15 scale-125' 
              : 'text-emerald-500/5 fill-transparent scale-100 group-hover/heart:scale-110'
          }`}
          strokeWidth={1.5}
        />
        
        <span className={`relative z-10 font-black font-sans text-lg transition-colors duration-300 ${
          isFavorite ? 'text-rose-600' : 'text-emerald-700'
        }`}>
          {toBengaliNumber(song.id)}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <h3 
          className="font-bold text-slate-800 font-bengali truncate group-hover:text-emerald-600 transition-colors"
          style={{ fontSize: 'var(--index-font-size)' }}
        >
          {renderTitle(song.title)}
        </h3>
        <div className="flex flex-col gap-1 mt-1">
          {song.composer && (
            <div className="flex items-center gap-1.5">
              <User className="w-3 h-3 text-slate-300" />
              <span className="text-[11px] font-medium text-slate-400 leading-none">{song.composer}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongCard;
