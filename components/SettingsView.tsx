import React from 'react';
import { 
  User, 
  Info, 
  ChevronRight, 
  Monitor, 
  ArrowLeft
} from 'lucide-react';
import InfoView from './InfoView';
import { BENGALI_FONTS } from '../constants';

interface SettingsViewProps {
  fontSize: number;
  setFontSize: (size: number) => void;
  currentFont: string;
  setCurrentFont: (font: string) => void;
  onBack?: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({
  fontSize,
  setFontSize,
  currentFont,
  setCurrentFont,
  onBack
}) => {
  const [showInfo, setShowInfo] = React.useState(false);

  if (showInfo) {
    return (
      <div className="min-h-screen bg-slate-50 transition-colors duration-300">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-4 py-4 flex items-center gap-4">
          <button 
            onClick={() => setShowInfo(false)}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-bold text-slate-800 font-bengali">তথ্য ও পরিচিতি</h2>
        </header>
        <InfoView />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-1.5 font-bengali">সেটিংস</h2>
      </div>

      {/* Profile Section */}
      <section className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
            <User className="w-7 h-7" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 font-bengali">ব্যবহারকারী প্রোফাইল</h3>
            <p className="text-sm text-slate-500">অতিথি ব্যবহারকারী</p>
          </div>
        </div>
      </section>

      {/* Appearance Section */}
      <section className="space-y-3">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">অ্যাপের চেহারা</h3>
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
          {/* Font Size Setting */}
          <div className="p-4 border-b border-slate-50 space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500 font-black text-lg font-bengali">
                ক
              </div>
              <span className="font-bold text-slate-700 font-bengali">অ্যাপের অক্ষরের আকার</span>
            </div>
            <div className="flex items-center gap-4 px-2">
              <span className="text-sm text-slate-400 font-bold font-bengali">ক</span>
              <input 
                type="range" 
                min="15" 
                max="32" 
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="flex-grow h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <span className="text-xl text-slate-400 font-bold font-bengali">ক</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium px-2 font-bengali">
              * এটি গানের লিরিক্স এবং অ্যাপের অন্যান্য লেখার আকার পরিবর্তন করবে।
            </p>
          </div>

          {/* Bengali Font Selection */}
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 font-black text-lg font-bengali">
                অ
              </div>
              <span className="font-bold text-slate-700 font-bengali">বাংলা ফন্ট পরিবর্তন</span>
            </div>
            <div className="relative">
              <select
                value={BENGALI_FONTS.find(f => f.family === currentFont)?.id || 'noto'}
                onChange={(e) => {
                  const selected = BENGALI_FONTS.find(f => f.id === e.target.value);
                  if (selected) setCurrentFont(selected.family);
                }}
                className="w-full p-3 rounded-xl border border-slate-100 bg-white text-slate-700 font-bengali appearance-none focus:ring-2 focus:ring-emerald-500 outline-none"
                style={{ fontFamily: currentFont }}
              >
                {BENGALI_FONTS.map(font => (
                  <option key={font.id} value={font.id} style={{ fontFamily: font.family }}>
                    {font.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronRight className="w-5 h-5 rotate-90" />
              </div>
            </div>
            <div 
              className="text-center p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200 transition-all"
              style={{ 
                fontFamily: currentFont,
                fontSize: `${fontSize}px`,
                lineHeight: 1.6
              }}
            >
              ঈশ্বর আমাদের আশ্রয় ও বল, সংকটে অতিশয় সুপ্রাপ্য সাহায্য।
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="space-y-3">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-2">অন্যান্য</h3>
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
          <button 
            onClick={() => setShowInfo(true)}
            className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-500">
                <Info className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-700 font-bengali">তথ্য ও পরিচিতি</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300" />
          </button>

          <div className="flex items-center justify-between p-4 border-t border-slate-50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500">
                <Monitor className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-700 font-bengali">ভার্সন</span>
            </div>
            <span className="text-xs font-black text-slate-300 uppercase tracking-widest">v1.0</span>
          </div>
        </div>
      </section>

      {/* Android TV Compatibility Note */}
      <div className="p-6 text-center space-y-2 opacity-50">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Android TV Compatible</p>
        <p className="text-[10px] text-slate-400 font-medium">D-pad নেভিগেশন সমর্থন করে</p>
      </div>
    </div>
  );
};

export default SettingsView;
