import React from 'react';
import { Heart, ShieldCheck, Cpu, User, Music, Mic, Type, Youtube, Smartphone, Mail, Facebook } from 'lucide-react';
import { toBengaliNumber } from '../utils/format';

const PortraitPhoto = ({ className }: { className?: string }) => {
  const [hasError, setHasError] = React.useState(false);
  const imageUrl = "https://i.postimg.cc/tJNKMtB4/portrait.jpg";

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-4 bg-emerald-600/10 blur-2xl rounded-sm opacity-50" />
      <div className="relative border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden bg-slate-50 dark:bg-slate-900 rounded-sm inline-block">
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
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <User className="w-8 h-8 opacity-40" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">চিত্র পাওয়া যায়নি</p>
          </div>
        )}
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex gap-4 items-start group">
    {/* This Box matches the Song Number Icon Style */}
    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div className="space-y-1">
      <h4 className="text-sm font-black text-slate-900 dark:text-slate-100 tracking-tight">{title}</h4>
      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

const InfoView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 pt-6 space-y-6 animate-in fade-in duration-1000 font-bengali pb-32">
      {/* Prayer/Glory Section - NOW ON TOP */}
      <div className="bg-emerald-600 p-6 md:p-8 rounded-3xl shadow-xl shadow-emerald-200/40 text-white flex flex-col items-center text-center space-y-4">
        <img src="/Cross.png" alt="Cross" className="w-32 h-44 object-contain opacity-100 mb-2 drop-shadow-2xl" />
        <p className="text-lg md:text-xl font-bold italic leading-relaxed font-bengali">
          “সব গৌরব, প্রশংসা ও স্তুতি কেবল আমাদের প্রেমময় পিতা ঈশ্বর ও ত্রাণকর্তা প্রভু যীশু খ্রীষ্টেরই প্রাপ্য।”
        </p>
        <div className="h-1 w-20 bg-white/20 rounded-full" />
      </div>

      {/* Dedication Section */}
      <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center space-y-8">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-emerald-500/20 pb-2">উৎসর্গ</h3>
        <PortraitPhoto className="scale-90" />
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xl font-black text-slate-900 dark:text-white">স্বর্গীয় বিভু রঞ্জন সরকার</p>
            <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
              জন্ম : ১লা আগস্ট ১৯২৮ — নিদ্রিত : ৩০শে ডিসেম্বর ১৯৮৫
            </p>
          </div>
          <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-sm mx-auto font-medium">
            আমাদের পিতৃব্য স্বর্গীয় বিভু রঞ্জন সরকার মহাশয়ের স্মরণার্থে ‘জয়ধ্বনি’ অ্যাপটি উৎসর্গীকৃত।
          </p>
        </div>
        <div className="flex items-center gap-4 text-emerald-600/10 dark:text-emerald-400/10">
           <Heart className="w-6 h-6 fill-current" />
           <Heart className="w-6 h-6 fill-current" />
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center space-y-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-emerald-500/20 pb-2">ভূমিকা</h3>
        <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed font-medium max-w-2xl">
          <p className="text-[15px] dark:text-slate-300">
            ১৯৬৪ সালে ভ্রাতা বিভু রঞ্জন সরকার মহাশয়ের প্রচেষ্টায় 'জয়ধ্বনি' গীত পুস্তকটি প্রথম প্রকাশিত হয়। দীর্ঘ কয়েক দশক ধরে এই সংকলনটি খ্রীষ্টীয় আরাধনায় এক বিশেষ ভূমিকা পালন করে আসছে। সেই ঐতিহ্যকে আধুনিক প্রজন্মের কাছে পৌঁছে দিতে এবং ডিজিটাল মাধ্যমে এর ব্যবহার সহজতর করতে এই অ্যাপটি নির্মাণ করা হয়েছে। আমাদের প্রার্থনা, পশ্চিমবঙ্গ ও বাংলাদেশের সকল বাংলা মণ্ডলী যেন এই ডিজিটাল সংস্করণের মাধ্যমে উপকৃত হন।
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center space-y-8">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-emerald-500/20 pb-2">অ্যাপের প্রধান বৈশিষ্ট্যসমূহ</h3>
        
        <div className="grid gap-8 sm:grid-cols-2 text-left w-full">
          <FeatureItem 
            icon={<Music className="w-5 h-5" />}
            title="বিশাল ভাণ্ডার"
            desc="৪৫০ টিরও বেশি ঐতিহ্যবাহী স্তোত্রগান এবং সমকালীন কোরাস গানের সংগ্রহ। নিয়মিতভাবে নতুন গান সংযোজন করা হচ্ছে।"
          />
          <FeatureItem 
            icon={<Heart className="w-5 h-5" />}
            title="ব্যক্তিগতকরণ"
            desc="আপনার প্রিয় গানগুলো আলাদাভাবে 'Favorites' তালিকায় সংরক্ষণ করার সুবিধা।"
          />
          <FeatureItem 
            icon={<Type className="w-5 h-5" />}
            title="সহজ পঠনযোগ্যতা"
            desc="পড়ার সুবিধার্থে ফন্টের আকার ছোট বা বড় করার অপশন এবং বিঘ্নহীন অভিজ্ঞতার জন্য 'ইমার্সিভ মোড'।"
          />
          <FeatureItem 
            icon={<Youtube className="w-5 h-5" />}
            title="মাল্টিমিডিয়া সংযোগ"
            desc="অনেক গানের সাথে সরাসরি ইউটিউব (YouTube) লিঙ্ক যুক্ত করা হয়েছে যাতে গানটি শোনার সুবিধা পাওয়া যায়।"
          />
          <FeatureItem 
            icon={<Smartphone className="w-5 h-5" />}
            title="অফলাইন সুবিধা"
            desc="এটি একটি প্রগ্রেসিভ ওয়েব অ্যাপ (PWA), যা মোবাইল বা ডেক্সটপে ইনস্টল করা যায় এবং অফলাইনেও গান ও লিরিক্স দেখা সম্ভব।"
          />
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center space-y-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 border-b-2 border-emerald-500/20 pb-2">আমাদের সোশ্যাল মিডিয়া</h3>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <a
            href="https://www.facebook.com/profile.php?id=61578663071457"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#1877F2]/10 border border-[#1877F2]/20 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 group"
          >
            <Facebook className="w-5 h-5" />
            <span className="font-bold">ফেসবুক</span>
          </a>
          <a
            href="https://www.youtube.com/@jayodhoni"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[140px] flex items-center justify-center gap-3 p-4 rounded-2xl bg-[#FF0000]/10 border border-[#FF0000]/20 text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all duration-300 group"
          >
            <Youtube className="w-5 h-5" />
            <span className="font-bold">ইউটিউব</span>
          </a>
        </div>
      </div>

      {/* Contact & Collection Section */}
      <div className="bg-emerald-600 p-6 md:p-8 rounded-3xl shadow-xl shadow-emerald-200/40 text-white flex flex-col items-center text-center space-y-6">
        <h3 className="text-xl font-bold text-white border-b-2 border-white/20 pb-2">যোগাযোগ ও সংগ্রহ</h3>

        <div className="space-y-4 w-full max-w-md">
          <p className="text-sm font-medium opacity-95 leading-relaxed">
            গানের বইটির মুদ্রিত কপির জন্য বা কোনো পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>

          <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
            <p className="text-sm font-bold">
              বইয়ের মূল্য: {toBengaliNumber('১৫০')} টাকা + কুরিয়ার চার্জ।
            </p>
          </div>

          <a
            href="mailto:souravsircar@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 rounded-2xl font-bold text-sm hover:bg-emerald-50 transition-colors shadow-lg"
          >
            <Mail className="w-4 h-4" />
            souravsircar@gmail.com
          </a>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center pt-8 space-y-4">
        <div className="flex items-center justify-center gap-2 text-slate-300 dark:text-slate-700">
          <Cpu className="w-4 h-4" />
          <div className="h-px w-12 bg-slate-200 dark:bg-slate-800" />
          <ShieldCheck className="w-4 h-4" />
        </div>
        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.4em]">
          Digital Signature Verified • {toBengaliNumber('২০২৬')}
        </p>
      </div>
    </div>
  );
};

export default InfoView;
