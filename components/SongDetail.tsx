import React, { useState, useMemo, useEffect } from 'react';
import { Song } from '../types';
import { ChevronLeft, Minus, Plus, Heart, Tag, Home } from 'lucide-react';
import { toBengaliNumber } from '../utils/format';

interface SongDetailProps {
  song: Song;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const SongDetail: React.FC<SongDetailProps> = ({ song, onBack, isFavorite, onToggleFavorite }) => {
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem('jayadhani_lyrics_font_size');
    return saved ? parseInt(saved, 10) : 20;
  });

  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    localStorage.setItem('jayadhani_lyrics_font_size', fontSize.toString());
  }, [fontSize]);

  const stanzas = useMemo(() => {
    return song.lyrics.split(/\n\n+/).filter(s => s.trim().length > 0);
  }, [song.lyrics]);

  const parseStanza = (text: string) => {
    const markerRegex = /^([০-৯]+|ধুয়া|ধ্রুব|Chorus|ধুয়া|অন্তরা)[:ঃ]?\s*(.*)/s;
    const match = text.trim().match(markerRegex);
    return match ? { marker: match[1], content: match[2].trim() } : { marker: null, content: text.trim() };
  };

  const hasAnyMarker = useMemo(() => {
    return stanzas.some(s => parseStanza(s).marker !== null);
  }, [stanzas]);

  const toggleControls = () => setShowControls(prev => !prev);

  const renderStyledTitle = (title: string, isLarge: boolean = false) => {
    const match = title.match(/^(.*?)\s*\((.*)\)$/);
    if (match) {
      return (
        <>
          {match[1]}
          <span className={`block md:inline ${isLarge ? 'md:ml-3' : 'ml-1.5'} text-[0.75em] italic font-medium text-slate-400 font-sans tracking-tight opacity-90`}>
            ({match[2]})
          </span>
        </>
      );
    }
    return title;
  };

  return (
    <div className="min-h-screen bg-slate-50/30 font-bengali pb-40 relative">
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-0 left-0 right-0 z-50 shadow-sm shadow-slate-200/5">
        <div className="max-w-2xl mx-auto px-4 py-2 flex items-center justify-between relative min-h-[64px]">
          <button 
            onClick={onBack} 
            className="p-2.5 bg-slate-50 text-slate-600 hover:bg-slate-100 rounded-2xl transition-all active:scale-90 z-10 shrink-0"
            aria-label="Back"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex-1 flex items-center px-4 overflow-hidden">
            <div className="flex items-center gap-3 w-full">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100/50 shrink-0">
                <span className="text-sm font-black text-emerald-600 font-sans">
                  {toBengaliNumber(song.id)}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-sm font-bold text-slate-800 leading-tight line-clamp-2">
                  {renderStyledTitle(song.title)}
                </h1>
              </div>
            </div>
          </div>

          <button 
            onClick={onToggleFavorite} 
            className={`p-2.5 rounded-2xl transition-all active:scale-90 z-10 shrink-0 ${isFavorite ? 'bg-rose-50 text-rose-500' : 'bg-slate-50 text-slate-300'}`}
            aria-label="Toggle Favorite"
          >
            <Heart className={`w-6 h-6 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>
      </header>

      <main 
        onClick={toggleControls}
        className="max-w-2xl mx-auto px-6 pt-12 pb-12 md:pt-16 md:pb-16 text-center cursor-pointer min-h-screen"
      >
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-[17px] md:text-[25px] font-black text-slate-900 leading-[1.2] mb-6 tracking-tight">
            {renderStyledTitle(song.title, true)}
          </h1>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-slate-200" />
            <div className="flex items-center gap-2">
              <Tag className="w-3 h-3 text-emerald-500" />
              <span className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">{song.category}</span>
            </div>
            <div className="h-px w-10 bg-gradient-to-l from-transparent to-slate-200" />
          </div>
        </div>

        <div className="space-y-10">
          {stanzas.map((stanzaText, index) => {
            const { marker, content } = parseStanza(stanzaText);
            const isChorus = marker === 'ধুয়া' || marker === 'ধুয়া' || marker === 'Chorus' || marker === 'অন্তরা' || marker === 'ধ্রুব';
            
            const displayMarker = marker || (!hasAnyMarker && stanzas.length > 1 && index > 0 ? toBengaliNumber(index + 1) : null);

            return (
              <div key={index} className="flex flex-col items-center group animate-in fade-in duration-1000" style={{ animationDelay: `${index * 100}ms` }}>
                {displayMarker && (
                  <div 
                    className={`mb-3 font-black transition-colors duration-500 ${isChorus ? 'text-rose-400 italic' : 'text-slate-200 group-hover:text-emerald-300'}`}
                    style={{ fontSize: `${Math.max(14, fontSize * 0.75)}px` }}
                  >
                    {displayMarker}
                  </div>
                )}
                <div className="w-full">
                  <p 
                    className={`leading-[1.9] font-medium whitespace-pre-wrap transition-all duration-500 mx-auto max-w-[90%] md:max-w-[80%] text-slate-700 ${isChorus ? 'italic' : ''}`} 
                    style={{ fontSize: `${fontSize}px` }}
                  >
                    {content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <div 
        className={`fixed bottom-8 left-0 right-0 z-40 px-6 pointer-events-none transition-all duration-500 transform ${
          showControls ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}
      >
        <div className="max-w-2xl mx-auto flex items-center justify-end pointer-events-auto">
          <div className="flex items-center gap-1.5 p-1.5 bg-white/95 backdrop-blur-2xl rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200/60">
            <button 
              onClick={(e) => { e.stopPropagation(); onBack(); }}
              className="p-3 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all active:scale-90 flex items-center gap-2 pr-4"
              title="সূচী"
            >
              <Home className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">সূচী</span>
            </button>

            <div className="w-px h-6 bg-slate-200/60 mx-0.5" />

            <button 
              onClick={(e) => { e.stopPropagation(); setFontSize(f => Math.max(14, f - 2)); }} 
              className="p-3 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all active:scale-90"
              title="Font Decrease"
            >
              <Minus className="w-5 h-5" />
            </button>
            <div className="w-px h-6 bg-slate-200/60 mx-0.5" />
            <button 
              onClick={(e) => { e.stopPropagation(); setFontSize(f => Math.min(40, f + 2)); }} 
              className="p-3 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all active:scale-90"
              title="Font Increase"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetail;