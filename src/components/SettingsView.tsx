import React from 'react';
import { 
  ChevronRight, 
  Monitor,
  Star
} from 'lucide-react';
import { BENGALI_FONTS } from '../constants';
import { MainLogo } from './Logo';

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
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-1.5 font-bengali transition-colors">সেটিংস</h2>
      </div>

      {/* Appearance Section */}
      <section className="space-y-3">
        <h3 className="text-xs font-black text-slate-500/60 uppercase tracking-widest px-2 font-bengali">অ্যাপের চেহারা</h3>
        <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm transition-colors">
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
                className="w-full p-3 rounded-xl border border-slate-100 bg-white text-slate-700 font-bengali appearance-none focus:ring-2 focus:ring-emerald-500 outline-none transition-colors"
                style={{ fontFamily: currentFont }}
              >
                {BENGALI_FONTS.map(font => (
                  <option key={font.id} value={font.id} style={{ fontFamily: font.family }} className="bg-white">
                    {font.name}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronRight className="w-5 h-5 rotate-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ratings Section */}
      <section className="space-y-4">
        <h3 className="text-sm font-bold text-slate-500/80 px-2 font-bengali">মতামত ও রেটিং</h3>
        <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm transition-colors p-2">
          <a 
            href="#" 
            className="flex items-center justify-between p-4 group active:bg-slate-50 transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 shadow-sm border border-emerald-100/50">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-lg font-bold text-slate-800 font-bengali tracking-tight">অ্যাপটি রেট করুন</span>
                <span className="text-xs text-slate-400 font-medium font-bengali">প্লে-স্টোরে আপনার মতামত দিন</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
          </a>
        </div>
      </section>

      {/* Others Section */}
      <section className="space-y-3">
        <h3 className="text-xs font-black text-slate-500/60 uppercase tracking-widest px-2 font-bengali">অন্যান্য</h3>
        <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm transition-colors">
          <div className="flex items-center justify-between p-4">
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
    </div>
  );
};

export default SettingsView;
