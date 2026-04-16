import React from 'react';
import { 
  ChevronRight,
  Monitor, 
  ArrowLeft,
  Moon,
  Sun,
  Star,
  Mail,
  BookOpen
} from 'lucide-react';
import InfoView from './InfoView';
import { BENGALI_FONTS } from '../constants';
import { toBengaliNumber } from '../utils/format';

interface SettingsViewProps {
  fontSize: number;
  setFontSize: (size: number) => void;
  currentFont: string;
  setCurrentFont: (font: string) => void;
  theme: 'light' | 'dark' | 'system';
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  onBack?: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({
  fontSize,
  setFontSize,
  currentFont,
  setCurrentFont,
  theme,
  setTheme,
  onBack
}) => {
  const [showInfo, setShowInfo] = React.useState(false);

  if (showInfo) {
    return (
      <div className="min-h-screen bg-[var(--bg-main)] transition-colors duration-300">
        <header className="sticky top-0 z-50 bg-[var(--header-bg)]/80 backdrop-blur-xl border-b border-[var(--border-color)] px-4 py-4 flex items-center gap-4">
          <button 
            onClick={() => setShowInfo(false)}
            className="p-2 hover:bg-[var(--bg-input)] rounded-full text-[var(--text-muted)] transition-colors"
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
        <h3 className="text-xs font-black text-[var(--text-muted)] uppercase tracking-widest px-2">অ্যাপের চেহারা</h3>
        <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)] overflow-hidden shadow-sm dark:shadow-none">
          {/* Theme Selection */}
          <div className="p-4 border-b border-[var(--border-color)] space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Monitor className="w-5 h-5" />
              </div>
              <span className="font-bold text-[var(--text-main)] font-bengali">থিম (Theme)</span>
            </div>
            <div className="flex p-1 bg-[var(--bg-input)] rounded-2xl">
              {[
                { id: 'light', icon: <Sun className="w-4 h-4" />, label: 'লাইট' },
                { id: 'system', icon: <Monitor className="w-4 h-4" />, label: 'সিস্টেম' },
                { id: 'dark', icon: <Moon className="w-4 h-4" />, label: 'ডার্ক' }
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    theme === t.id
                      ? 'bg-[var(--bg-card)] text-emerald-600 dark:text-emerald-400 shadow-sm'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`}
                >
                  {t.icon}
                  <span className="font-bengali">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font Size Setting */}
          <div className="p-4 border-b border-[var(--border-color)] space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-black text-lg font-bengali">
                ক
              </div>
              <span className="font-bold text-[var(--text-main)] font-bengali">অ্যাপের অক্ষরের আকার</span>
            </div>
            <div className="flex items-center gap-4 px-2">
              <span className="text-sm text-[var(--text-muted)] font-bold font-bengali">ক</span>
              <input 
                type="range" 
                min="15" 
                max="32" 
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="flex-grow h-1.5 bg-[var(--bg-input)] rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <span className="text-xl text-[var(--text-muted)] font-bold font-bengali">ক</span>
            </div>
            <p className="text-[10px] text-[var(--text-muted)] font-medium px-2 font-bengali">
              * এটি গানের লিরিক্স এবং অ্যাপের অন্যান্য লেখার আকার পরিবর্তন করবে।
            </p>
          </div>

          {/* Bengali Font Selection */}
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-black text-lg font-bengali">
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
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)]">
                <ChevronRight className="w-5 h-5 rotate-90" />
              </div>
            </div>
            <div 
              className="text-center p-4 bg-[var(--bg-input)] rounded-2xl border border-dashed border-[var(--border-color)] text-[var(--text-main)] transition-all"
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

      {/* Feedback Section */}
      <section className="space-y-3">
        <h3 className="text-xs font-black text-[var(--text-muted)] uppercase tracking-widest px-2">মতামত ও রেটিং</h3>
        <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)] overflow-hidden shadow-sm dark:shadow-none">
          <button 
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.sourav.jayadhani', '_blank')}
            className="w-full p-4 flex items-center justify-between hover:bg-[var(--bg-input)] transition-colors group text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Star className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-bold text-[var(--text-main)] font-bengali">অ্যাপটি রেট করুন</span>
                <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider">প্লে-স্টোরে আপনার মতামত দিন</span>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-[var(--text-muted)] group-hover:text-emerald-500 transition-colors" />
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="space-y-3">
        <h3 className="text-xs font-black text-[var(--text-muted)] uppercase tracking-widest px-2">যোগাযোগ ও সংগ্রহ</h3>
        <div className="bg-[var(--bg-card)] rounded-3xl border border-[var(--border-color)] overflow-hidden shadow-sm dark:shadow-none divide-y divide-[var(--border-color)]">
          {/* Email Contact */}
          <div className="p-4 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[var(--text-main)] font-bengali">ইমেইল করুন</span>
                <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider">পরামর্শ বা গান যুক্ত করতে</span>
              </div>
            </div>
            <a
              href="mailto:souravsircar@gmail.com"
              className="w-full py-3 bg-[var(--bg-input)] rounded-2xl text-center font-bold text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/5 transition-colors text-sm"
            >
              souravsircar@gmail.com
            </a>
          </div>

          {/* Physical Book */}
          <div className="p-4 flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-[var(--text-main)] font-bengali">বই সংগ্রহ</span>
                <span className="text-[10px] text-[var(--text-muted)] font-bold uppercase tracking-wider">মুদ্রিত সংস্করণ</span>
              </div>
            </div>
            <div className="bg-emerald-500/5 dark:bg-emerald-500/10 rounded-2xl p-4 border border-emerald-500/10">
              <p className="text-sm text-[var(--text-main)] font-medium leading-relaxed font-bengali">
                গানের বইটির মুদ্রিত কপির জন্য যোগাযোগ করুন।
                মূল্য: {toBengaliNumber('১৫০')} টাকা + কুরিয়ার চার্জ।
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SettingsView;
