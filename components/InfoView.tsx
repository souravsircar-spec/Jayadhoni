
import React from 'react';
import { Heart, ShieldCheck, Cpu, User } from 'lucide-react';
import { toBengaliNumber } from '../utils/format';

const MainLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1024 1024" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="1024" height="1024" rx="200" fill="#2E8B57"/>
    <defs>
      <linearGradient id="gloss" x1="0" y1="0" x2="1024" y2="1024" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.2"/>
        <stop offset="0.5" stopColor="white" stopOpacity="0"/>
        <stop offset="1" stopColor="black" stopOpacity="0.1"/>
      </linearGradient>
    </defs>
    <rect width="1024" height="1024" rx="200" fill="url(#gloss)"/>
    <g transform="translate(162, 212)">
      <path d="M350 580 C350 580 350 130 350 80 C350 30 318 0 238 0 C158 0 58 0 58 0 V500 C58 500 158 500 238 500 C318 500 350 530 350 580 Z" fill="#E2E8F0" transform="translate(10, 15)"/>
      <path d="M350 580 C350 580 350 130 350 80 C350 30 382 0 462 0 C542 0 642 0 642 0 V500 C642 500 542 500 462 500 C382 500 350 530 350 580 Z" fill="#E2E8F0" transform="translate(10, 15)"/>
      <path d="M350 580 C350 580 350 130 350 80 C350 30 318 0 238 0 C158 0 58 0 58 0 V500 C58 500 158 500 238 500 C318 500 350 530 350 580 Z" fill="white"/>
      <path d="M350 580 C350 580 350 130 350 80 C350 30 382 0 462 0 C542 0 642 0 642 0 V500 C642 500 542 500 462 500 C382 500 350 530 350 580 Z" fill="white"/>
      <rect x="347" y="60" width="6" height="480" rx="3" fill="#CBD5E1" opacity="0.5"/>
      <g transform="translate(325, 170)">
        <rect x="16" y="0" width="18" height="130" rx="9" fill="#059669" stroke="white" strokeWidth="4"/>
        <rect x="-15" y="35" width="80" height="18" rx="9" fill="#059669" stroke="white" strokeWidth="4"/>
        <rect x="16" y="0" width="18" height="130" rx="9" fill="#059669"/>
        <rect x="-15" y="35" width="80" height="18" rx="9" fill="#059669"/>
      </g>
    </g>
  </svg>
);

const PortraitPhoto = ({ className }: { className?: string }) => {
  const [hasError, setHasError] = React.useState(false);
  const imageUrl = "/portrait.jpg";

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-4 bg-emerald-600/10 blur-2xl rounded-sm opacity-50" />
      <div className="relative border-4 border-white shadow-xl overflow-hidden bg-slate-50 w-full h-full aspect-[3/4] flex items-center justify-center rounded-sm">
        {!hasError ? (
          <img 
            src={imageUrl} 
            alt="স্বর্গীয় বিভু রঞ্জন সরকার"
            className="w-full h-full object-cover grayscale brightness-[1.05] hover:grayscale-0 transition-all duration-700"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-300 p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
              <User className="w-8 h-8 opacity-40" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">চিত্র পাওয়া যায়নি</p>
          </div>
        )}
      </div>
    </div>
  );
};

const InfoView: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 pt-10 space-y-12 animate-in fade-in duration-1000 font-bengali pb-32">
      <div className="text-center">
        <div className="w-20 h-20 mx-auto mb-6 shadow-xl rounded-[2rem] overflow-hidden">
          <MainLogo className="w-full h-full" />
        </div>
        <h2 className="text-4xl font-black text-emerald-600 mb-2">জয়ধ্বনি</h2>
        <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">বাংলা খ্রীষ্টিয় সংগীত সংকলন</p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center space-y-10">
        <h3 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-2">উৎসর্গ</h3>
        <PortraitPhoto className="w-48 md:w-56" />
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-2xl font-black text-slate-900">স্বর্গীয় বিভু রঞ্জন সরকার</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
              জন্ম : ১লা আগস্ট ১৯২৮ — নিদ্রিত : ৩০শে ডিসেম্বর ১৯৮৫
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed max-w-sm mx-auto font-medium">
            আমাদের পিতৃব্য স্বর্গীয় বিভু রঞ্জন সরকার মহাশয়ের স্মরণার্থে ‘জয়ধ্বনি’ পুস্তকটি উৎসর্গীকৃত।
          </p>
        </div>
        <div className="flex items-center gap-4 text-emerald-600/10">
           <Heart className="w-6 h-6 fill-current" />
           <Heart className="w-6 h-6 fill-current" />
        </div>
      </div>

      <div className="text-center pt-8 space-y-4">
        <div className="flex items-center justify-center gap-2 text-slate-200">
          <Cpu className="w-4 h-4" />
          <div className="h-px w-12 bg-slate-100" />
          <ShieldCheck className="w-4 h-4" />
        </div>
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em]">
          Digital Signature Verified • {toBengaliNumber('২০২৬')}
        </p>
      </div>
    </div>
  );
};

export default InfoView;
