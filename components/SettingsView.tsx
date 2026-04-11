import React from 'react';
import { 
  Info, 
  ChevronRight, 
  Monitor, 
  ArrowLeft,
  Moon,
  Sun,
  Star
} from 'lucide-react';
import InfoView from './InfoView';
import { BENGALI_FONTS } from '../constants';

interface SettingsViewProps {
  fontSize: number;
  setFontSize: (size: number) => void;
  currentFont: string;
  setCurrentFont: (font: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
  onBack?: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({
  fontSize,
  setFontSize,
  currentFont,
  setCurrentFont,
  isDarkMode,
  setIsDarkMode,
  onBack
}) => {
  const [showInfo, setShowInfo] = React.useState(false);

  if (showInfo) {
    return (
      <div className="min-h-screen bg-[var(--bg-main)] transition-colors duration-300">
        <header className="sticky top-0 z-50 bg-[var(--bg-card)]/80 backdrop-blur-xl border-b border-[var(--border-color)] px-4 py-4 flex items-center gap-4">
          <button 
            onClick={() => setShowInfo(false)}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-500 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-bold text-[var(--text-main)] font-bengali">তথ্য ও পরিচিতি</h2>
        </header>
        <InfoView />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-1.5 font-bengali">সেটিংস</h2>
      </div>

      {/* Appearance Section */}
      <section className="space-y-3">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">অ্যাপের চেহারা</h3>
        <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)] overflow-hidden shadow-sm">
          {/* Font Size Setting */}
          <div className="p-4 border-b border-[var(--border-color)] space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-500 font-black text-lg font-bengali">
                ক
              </div>
              <span className="font-bold text-[var(--text-main)] font-bengali">অ্যাপের অক্ষরের আকার</span>
            </div>
            <div className="flex items-center gap-4 px-2">
              <span className="text-sm text-slate-400 font-bold font-bengali">ক</span>
              <input 
                type="range" 
                min="15" 
                max="32" 
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="flex-grow h-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <span className="text-xl text-slate-400 font-bold font-bengali">ক</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium px-2 font-bengali">
              * এটি গানের লিরিক্স এবং অ্যাপের অন্যান্য লেখার আকার পরিবর্তন করবে।
            </p>
          </div>

          {/* Bengali Font Selection */}
          <div className="p-4 border-b border-[var(--border-color)] space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 dark:bg-rose-900/20 flex items-center justify-center text-rose-500 font-black text-lg font-bengali">
                অ
              </div>
              <span className="font-bold text-[var(--text-main)] font-bengali">বাংলা ফন্ট পরিবর্তন</span>
            </div>
            <div className="relative">
              <select
                value={BENGALI_FONTS.find(f => f.family === currentFont)?.id || 'noto'}
                onChange={(e) => {
                  const selected = BENGALI_FONTS.find(f => f.id === e.target.value);
                  if (selected) setCurrentFont(selected.family);
                }}
                className="w-full p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-main)] font-bengali appearance-none focus:ring-2 focus:ring-emerald-500 outline-none"
                style={{ fontFamily: currentFont }}
              >
                {BENGALI_FONTS.map(font => (
                  <option key={font.id} value={font.id} className="bg-[var(--bg-card)] text-[var(--text-main)]" style={{ fontFamily: font.family }}>
                    {font.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronRight className="w-5 h-5 rotate-90" />
              </div>
            </div>
            <div 
              className="text-center p-4 bg-[var(--bg-main)] rounded-2xl border border-dashed border-[var(--border-color)] text-[var(--text-main)] transition-all"
              style={{ 
                fontFamily: currentFont,
                fontSize: `${fontSize}px`,
                lineHeight: 1.6
              }}
            >
              ঈশ্বর আমাদের আশ্রয় ও বল, সংকটে অতিশয় সুপ্রাপ্য সাহায্য।
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500">
                {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </div>
              <span className="font-bold text-[var(--text-main)] font-bengali">ডার্ক মোড (Dark Mode)</span>
            </div>
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${isDarkMode ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-700'}`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="space-y-3">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">মতামত ও রেটিং</h3>
        <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)] overflow-hidden shadow-sm">
          <button 
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.jayadhani.app', '_blank')}
            className="w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-500">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-[var(--text-main)] font-bengali">অ্যাপটি রেট করুন</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">প্লে-স্টোরে আপনার মতামত দিন</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 transition-colors" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default SettingsView;
