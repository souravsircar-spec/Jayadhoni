import React from 'react';
import { Song } from '../types';
import { Heart, Tag, User } from 'lucide-react';
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
      return (
        <>
          {match[1]}
          <span className="ml-1.5 text-[0.8em] italic font-medium text-slate-500 font-sans tracking-tight">
            ({match[2]})
          </span>
        </>
      );
    }
    return title;
  };

  return (
    <div 
      onClick={onClick}
      className="group relative bg-white p-4 rounded-[2rem] border border-slate-100 flex items-center gap-4 cursor-pointer transition-all hover:shadow-xl hover:shadow-slate-200/50 active:scale-[0.99]"
    >
      {/* Integrated ID Badge with transparent heart background */}
      <div 
        onClick={onToggleFavorite}
        className="relative shrink-0 w-14 h-14 bg-emerald-50/50 border border-emerald-100/50 rounded-2xl flex items-center justify-center overflow-hidden transition-transform hover:scale-105 active:scale-95 group/heart"
        title={isFavorite ? "পছন্দ থেকে সরান" : "পছন্দ হিসেবে রাখুন"}
      >
        {/* Transparent Heart Shape behind the number */}
        <Heart 
          className={`absolute w-10 h-10 transition-all duration-300 ${
            isFavorite 
              ? 'text-rose-500/20 fill-rose-500/10 scale-125' 
              : 'text-emerald-200/40 fill-emerald-100/20 scale-100 group-hover/heart:scale-110'
          }`}
          strokeWidth={1.5}
        />
        
        {/* Song Number: Turns red (rose-600) when favorite */}
        <span className={`relative z-10 font-black font-sans text-xl transition-colors duration-300 ${
          isFavorite ? 'text-rose-600' : 'text-emerald-700'
        }`}>
          {toBengaliNumber(song.id)}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-slate-800 font-bengali text-lg truncate group-hover:text-emerald-600 transition-colors">
          {renderTitle(song.title)}
        </h3>
        <div className="flex flex-col gap-1 mt-1">
          {song.composer && (
            <div className="flex items-center gap-1.5">
              <User className="w-3 h-3 text-slate-300" />
              <span className="text-[11px] font-medium text-slate-400 leading-none">{song.composer}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Tag className="w-3 h-3 text-slate-300" />
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest leading-none">{song.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongCard;