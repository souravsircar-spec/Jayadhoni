import React from 'react';
import { Heart, ShieldCheck, Cpu, User } from 'lucide-react';
import { toBengaliNumber } from '../utils/format';

const PortraitPhoto = ({ className }: { className?: string }) => {
  const [hasError, setHasError] = React.useState(false);
  const imageUrl = "https://i.postimg.cc/tJNKMtB4/portrait.jpg";

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-4 bg-emerald-600/10 blur-2xl rounded-sm opacity-50" />
      <div className="relative border-4 border-white shadow-xl overflow-hidden bg-slate-50 rounded-sm inline-block">
        {!hasError ? (
          <img 
            src={imageUrl} 
            alt="স্বর্গীয় বিভু রঞ্জন সরকার"
            referrerPolicy="no-referrer"
            className="max-w-full h-auto grayscale brightness-[1.05] hover:grayscale-0 transition-all duration-700 block"
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
      <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center space-y-10">
        <h3 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-2">উৎসর্গ</h3>
        <PortraitPhoto className="" />
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
