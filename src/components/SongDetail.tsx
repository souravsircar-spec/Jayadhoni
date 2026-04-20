import React, { useState, useMemo, useEffect } from 'react';
import { Song } from '../types';
import { ChevronLeft, Settings, Heart, Tag, Home, User, Youtube, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toBengaliNumber } from '../utils/format';
import { BENGALI_FONTS } from '../constants';

interface SongDetailProps {
  song: Song;
  onBack: () => void;
  onOpenSettings: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  globalFontSize: number;
  globalFontFamily: string;
  setFontSize: (size: number) => void;
  setCurrentFont: (font: string) => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

const SongDetail: React.FC<SongDetailProps> = ({ 
  song, 
  onBack, 
  onOpenSettings,
  isFavorite, 
  onToggleFavorite,
  globalFontSize,
  globalFontFamily,
  setFontSize,
  setCurrentFont,
  onNext,
  onPrevious
}) => {
  const [showControls, setShowControls] = useState(true);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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

  // Swipe gesture handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Min swipe distance in pixels
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && onNext) {
      onNext();
    } else if (isRightSwipe && onPrevious) {
      onPrevious();
    }
  };

  const renderStyledTitle = (title: string, isLarge: boolean = false) => {
    const match = title.match(/^(.*?)\s*\((.*)\)$/);
    if (match) {
      if (isLarge) {
        return (
          <div className="flex flex-col items-center">
            <span className="text-[22px] md:text-[32px] font-black text-slate-900 mb-1 leading-tight">
              {match[1]}
            </span>
            <span className="text-[13px] md:text-[16px] font-bold text-emerald-600/80 font-sans tracking-wide">
              {match[2]}
            </span>
          </div>
        );
      }
      return (
        <div className="flex flex-col min-w-0">
          <span className="text-[15px] font-bold text-slate-800 leading-tight truncate">
            {match[1]}
          </span>
        </div>
      );
    }
    return isLarge ? (
      <span className="text-[22px] md:text-[32px] font-black text-slate-900">
        {title}
      </span>
    ) : (
      <span className="text-[15px] font-bold text-slate-800 leading-tight truncate">
        {title}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] font-bengali pb-24 relative transition-colors duration-300" style={{ fontFamily: globalFontFamily }}>
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-100 sticky top-0 left-0 right-0 z-50 shadow-sm shadow-slate-200/5 transition-colors">
        <div className="max-w-3xl mx-auto px-4 py-1.5 flex items-center justify-between relative min-h-[56px]">
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
                {renderStyledTitle(song.title)}
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
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="max-w-3xl mx-auto px-4 pt-6 pb-4 md:pt-8 md:pb-6 text-center cursor-pointer min-h-screen"
      >
        <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="mb-6">
            {renderStyledTitle(song.title, true)}
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            {song.composer && (
              <div className="flex items-center gap-2">
                <User className="w-3 h-3 text-slate-300" />
                <span className="text-xs font-bold text-slate-400 tracking-tight">{song.composer}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Tag className="w-3 h-3 text-emerald-500" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{(song.categories || []).join(', ')}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {stanzas.map((stanzaText, index) => {
            const { marker, content } = parseStanza(stanzaText);
            const isChorus = marker === 'ধুয়া' || marker === 'ধুয়া' || marker === 'Chorus' || marker === 'অন্তরা' || marker === 'ধ্রুব';
            
            const displayMarker = marker || (!hasAnyMarker && stanzas.length > 1 && index > 0 ? toBengaliNumber(index + 1) : null);

            return (
              <div key={index} className="flex flex-col items-center group animate-in fade-in duration-1000" style={{ animationDelay: `${index * 100}ms` }}>
                {displayMarker && (
                   <div 
                    className={`mb-3 font-black transition-colors duration-500 ${isChorus ? 'text-rose-400 italic' : 'text-emerald-500/50'}`}
                    style={{ fontSize: `${Math.max(14, globalFontSize * 0.75)}px` }}
                  >
                    {displayMarker}
                  </div>
                )}
                <div className="w-full">
                  <p 
                    className={`leading-[1.9] font-medium whitespace-pre-wrap transition-all duration-500 mx-auto max-w-[90%] md:max-w-[80%] text-slate-700 ${isChorus ? 'italic' : ''}`} 
                    style={{ fontSize: `${globalFontSize}px` }}
                  >
                    {content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Traditional End Design */}
        <div className="mt-4 mb-4 flex items-center justify-center gap-4 opacity-20 select-none animate-in fade-in duration-1000 delay-700">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-slate-400" />
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-slate-500" />
            <div className="w-3 h-3 rotate-45 border-2 border-slate-500 rounded-sm" />
            <div className="w-1 h-1 rounded-full bg-slate-500" />
          </div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-slate-400" />
        </div>
      </main>

      {/* Navigation Buttons (Next/Previous) */}
      <AnimatePresence>
        {showControls && (
          <>
            {onPrevious && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={(e) => { e.stopPropagation(); onPrevious(); }}
                className="fixed left-2 top-1/2 -translate-y-1/2 z-40 p-2 bg-white/20 backdrop-blur-sm border border-slate-200/10 rounded-full text-slate-400/30 hover:text-emerald-500 hover:bg-white/80 transition-all active:scale-90"
                aria-label="Previous song"
              >
                <ChevronLeft className="w-5 h-5" />
              </motion.button>
            )}
            {onNext && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="fixed right-2 top-1/2 -translate-y-1/2 z-40 p-2 bg-white/20 backdrop-blur-sm border border-slate-200/10 rounded-full text-slate-400/30 hover:text-emerald-500 hover:bg-white/80 transition-all active:scale-90"
                aria-label="Next song"
              >
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            )}
          </>
        )}
      </AnimatePresence>

      <div 
        className={`fixed bottom-8 left-0 right-0 z-40 px-6 pointer-events-none transition-all duration-500 transform ${
          showControls ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
        }`}
      >
        <div className="max-w-3xl mx-auto flex items-center justify-end pointer-events-auto">
          <div className="flex items-center gap-1.5 p-1.5 bg-white/95 backdrop-blur-2xl rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-200/60 transition-colors">
            <button 
              onClick={(e) => { e.stopPropagation(); onBack(); }}
              className="p-2.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all active:scale-90 flex items-center gap-1.5 pr-3"
              title="সূচী"
            >
              <Home className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">সূচী</span>
            </button>

            <div className="w-px h-6 bg-slate-200/60 mx-0" />

            <button 
              onClick={(e) => { e.stopPropagation(); setIsSettingsOpen(true); }} 
              className="p-2.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all active:scale-90 flex items-center gap-1.5 pr-3"
              title="সেটিংস"
            >
              <Settings className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-widest hidden sm:inline">সেটিংস</span>
            </button>

            {song.youtubeId && (
              <>
                <div className="w-px h-6 bg-slate-200/60 mx-0" />
                <button 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    window.open(`https://www.youtube.com/watch?v=${song.youtubeId}`, '_blank');
                  }} 
                  className="p-2.5 text-rose-500 hover:bg-rose-50 rounded-full transition-all active:scale-90"
                  title="Watch on YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Floating Settings Popup (Ultra Compact PiP Style) */}
      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="fixed bottom-24 right-6 w-[180px] z-[70] font-bengali"
          >
            {/* Close button outside the box */}
            <button 
              onClick={() => setIsSettingsOpen(false)}
              className="absolute -top-2 -right-2 p-1.5 bg-white border border-slate-200 text-slate-400 hover:text-rose-500 rounded-full shadow-lg transition-all active:scale-90 z-10"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="bg-white/95 border border-slate-200 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-3.5 space-y-4">
              <div className="space-y-4">
                {/* Font Size */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between px-0.5">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider">আকার</span>
                    <span className="text-[9px] font-black text-emerald-600">
                      {toBengaliNumber(globalFontSize)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="range" 
                      min="15" 
                      max="32" 
                      value={globalFontSize}
                      onChange={(e) => setFontSize(parseInt(e.target.value))}
                      className="flex-grow h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                    />
                  </div>
                </div>

                {/* Font Family */}
                <div className="space-y-1.5">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider px-0.5">ফন্ট</span>
                  <div className="relative">
                    <select
                      value={BENGALI_FONTS.find(f => f.family === globalFontFamily)?.id || 'noto'}
                      onChange={(e) => {
                        const selected = BENGALI_FONTS.find(f => f.id === e.target.value);
                        if (selected) setCurrentFont(selected.family);
                      }}
                      className="w-full pl-2 pr-6 py-1.5 rounded-lg border border-slate-100 bg-slate-50/50 text-slate-700 font-bengali text-[11px] appearance-none focus:ring-1 focus:ring-emerald-500 outline-none cursor-pointer transition-colors"
                      style={{ fontFamily: globalFontFamily }}
                    >
                      {BENGALI_FONTS.map(font => (
                        <option key={font.id} value={font.id} style={{ fontFamily: font.family }} className="bg-white">
                          {font.name}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-1.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-300">
                      <ChevronRight className="w-3 h-3 rotate-90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SongDetail;
