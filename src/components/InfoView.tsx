import React from 'react';
import { Heart, ShieldCheck, Cpu, User, Music, Search, Mic, Type, Youtube, Smartphone, Mail, Facebook, ArrowRight, ShoppingCart, MessageCircle } from 'lucide-react';
import { toBengaliNumber } from '../utils/format';
import { motion } from 'motion/react';

const PortraitPhoto = ({ className }: { className?: string }) => {
  const [hasError, setHasError] = React.useState(false);
  const imageUrl = "https://i.postimg.cc/tJNKMtB4/portrait.jpg";

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-4 bg-emerald-600/10 blur-2xl rounded-sm opacity-50" />
      <div className="relative border-4 border-white shadow-xl overflow-hidden bg-slate-50 rounded-sm inline-block transition-colors">
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

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex gap-4 items-start group">
    <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div className="space-y-1">
      <h4 className="text-sm font-black text-slate-800 tracking-tight transition-colors">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed font-medium transition-colors">{desc}</p>
    </div>
  </div>
);

const InfoView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 pt-6 space-y-8 animate-in fade-in duration-1000 font-bengali pb-32 transition-colors">
      
      {/* 1. Green Cross Card */}
      <div className="bg-emerald-600 p-8 rounded-[2rem] shadow-xl shadow-emerald-200/40 text-white flex flex-col items-center text-center space-y-8 transition-colors overflow-hidden">
        <div className="w-full flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-32 md:w-40"
          >
            <img 
              src="/Cross.png" 
              alt="Cross with Red Cloth"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain filter contrast-[1.05] brightness-[1.1]"
            />
          </motion.div>
        </div>

        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white font-bold italic text-lg md:text-xl leading-relaxed py-2"
          >
            “সব গৌরব, প্রশংসা ও স্তুতি কেবল আমাদের প্রেমময় পিতা ঈশ্বর ও ত্রাণকর্তা প্রভু যীশু খ্রীষ্টেরই প্রাপ্য।”
          </motion.p>
          <div className="w-16 h-1 bg-white/20 rounded-full mx-auto mt-6" />
        </div>
      </div>

      {/* 2. Dedication Section (উৎসর্গ) */}
      <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center space-y-8 transition-colors relative overflow-hidden">
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-1.5 font-bengali transition-colors">উৎসর্গ</h2>
        </div>

        <div className="w-40 md:w-48">
          <PortraitPhoto className="mt-2" />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-800">স্বর্গীয় বিভু রঞ্জন সরকার</h3>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            জন্ম : ১লা আগস্ট ১৯২৮ — নিদ্রিত : ৩০শে ডিসেম্বর ১৯৮৫
          </p>
          <p className="text-base text-slate-700 leading-relaxed max-w-sm mx-auto font-medium py-2">
            আমাদের পিতৃব্য স্বর্গীয় বিভু রঞ্জন সরকার মহাশয়ের স্মরণার্থে ‘জয়ধ্বনি’ অ্যাপটি উৎসর্গীকৃত।
          </p>
        </div>

        <div className="flex items-center gap-4 text-emerald-600/10 pt-4">
           <Heart className="w-8 h-8 fill-current" />
           <Heart className="w-8 h-8 fill-current" />
        </div>
      </div>

      {/* 3. Introduction Section (ভূমিকা) */}
      <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center space-y-6 transition-colors">
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-1.5 font-bengali transition-colors">ভূমিকা</h2>
        </div>
        <div className="space-y-5 text-slate-700 leading-relaxed font-medium max-w-2xl px-2">
          <p className="text-sm md:text-base">
            ১৯৬৪ সালে ভ্রাতা বিভু রঞ্জন সরকার মহাশয়ের প্রচেষ্টায় 'জয়ধ্বনি' গীত পুস্তকটি প্রথম প্রকাশিত হয়। দীর্ঘ কয়েক দশক ধরে এই সংকলনটি খ্রীষ্টীয় আরাধনায় এক বিশেষ ভূমিকা পালন করে আসছে। সেই ঐতিহ্যকে আধুনিক প্রজন্মের কাছে পৌঁছে দিতে এবং ডিজিটাল মাধ্যমে এর ব্যবহার সহজতর করতে এই অ্যাপটি নির্মাণ করা হয়েছে। আমাদের প্রার্থনা, পশ্চিমবঙ্গ ও বাংলাদেশের সকল বাংলা মণ্ডলী যেন এই ডিজিটাল সংস্করণের মাধ্যমে উপকৃত হন।
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center space-y-8 transition-colors">
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-1.5 font-bengali transition-colors">অ্যাপের প্রধান বৈশিষ্ট্যসমূহ</h2>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 text-left w-full px-2">
          <FeatureItem 
            icon={<Music className="w-5 h-5 text-emerald-600" />}
            title="বিশাল ভাণ্ডার"
            desc="৬০০ টিরও বেশি ঐতিহ্যবাহী স্তোত্রগান এবং সমকালীন কোরাস গানের সংগ্রহ। নিয়মিতভাবে নতুন গান সংযোজন করা হচ্ছে।"
          />
          <FeatureItem 
            icon={<Search className="w-5 h-5 text-emerald-600" />}
            title="উন্নত অনুসন্ধান"
            desc="গান নম্বর, শিরোনাম বা গানের কলি দিয়ে খোঁজার পাশাপাশি ইংরেজি হরফে বাংলা লিখেও গান খুঁজে পাওয়া সম্ভব।"
          />
          <FeatureItem 
            icon={<Mic className="w-5 h-5 text-emerald-600" />}
            title="ভয়েস সার্চ"
            desc="দ্রুত গান খোঁজার জন্য এতে যুক্ত করা হয়েছে বাংলা ভয়েস রিকগনিশন সুবিধা।"
          />
          <FeatureItem 
            icon={<Heart className="w-5 h-5 text-emerald-600" />}
            title="ব্যক্তিগতকরণ"
            desc="আপনার প্রিয় গানগুলো আলাদাভাবে 'প্রিয় গান' তালিকায় সংরক্ষণ করার সুবিধা।"
          />
          <FeatureItem 
            icon={<Type className="w-5 h-5 text-emerald-600" />}
            title="সহজ পঠনযোগ্যতা"
            desc="পড়ার সুবিধার্থে ফন্টের আকার পরিবর্তন করার অপশন এবং বিঘ্নহীন পঠন অভিজ্ঞতার জন্য 'ইমার্সিভ মোড'।"
          />
          <FeatureItem 
            icon={<Youtube className="w-5 h-5 text-emerald-600" />}
            title="ইউটিউব সংযোগ"
            desc="অনেক গানের সাথে সরাসরি ভিডিও লিঙ্ক যুক্ত করা হয়েছে যাতে গানটি শোনার সুবিধা পাওয়া যায়।"
          />
          <FeatureItem 
            icon={<Smartphone className="w-5 h-5 text-emerald-600" />}
            title="অফলাইন সুবিধা"
            desc="এটি একটি আধুনিক ওয়েব অ্যাপ, যা মোবাইল বা ডেক্সটপে ইনস্টল করা যায় এবং অফলাইনেও গান দেখা সম্ভব।"
          />
        </div>
      </div>

      {/* Contact & Social Section */}
      <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center space-y-8 transition-colors">
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-1.5 font-bengali transition-colors">আমাদের সোশ্যাল মিডিয়া</h2>
        </div>

        <div className="flex items-center justify-center gap-8">
          <a 
            href="https://whatsapp.com/channel/0029Vb7r7YvBlHpUzJXhLk2K" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-2xl transition-all hover:bg-emerald-100 hover:scale-110 active:scale-95 shadow-sm"
            title="হোয়াটসঅ্যাপ চ্যানেল"
          >
            <MessageCircle className="w-7 h-7" />
          </a>

          <a 
            href="https://www.facebook.com/profile.php?id=61578663071457" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-blue-50 text-blue-600 rounded-2xl transition-all hover:bg-blue-100 hover:scale-110 active:scale-95 shadow-sm"
            title="ফেসবুক"
          >
            <Facebook className="w-7 h-7" />
          </a>

          <a 
            href="https://www.youtube.com/@jayodhoni" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center bg-red-50 text-red-600 rounded-2xl transition-all hover:bg-red-100 hover:scale-110 active:scale-95 shadow-sm"
            title="ইউটিউব"
          >
            <Youtube className="w-7 h-7" />
          </a>
        </div>
      </div>

      {/* Printed Edition & Email Section (Separated for clarity) */}
      <div className="bg-emerald-600 p-8 rounded-[2rem] shadow-xl shadow-emerald-200/40 text-white flex flex-col items-center text-center space-y-8">
        <div className="flex items-center justify-center">
          <h2 className="text-xl font-bold text-white border-b-2 border-white/20 pb-1.5 font-bengali transition-colors">যোগাযোগ ও সংগ্রহ</h2>
        </div>

        <p className="text-base md:text-lg font-medium leading-relaxed max-w-xl">
          গানের বইটির মুদ্রিত সংস্করণের জন্য বা কোনো পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন।
        </p>

        <div className="w-full max-w-md bg-white/10 backdrop-blur-sm border border-white/20 rounded-[2rem] p-6 flex flex-col items-center gap-4 mt-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-400 text-amber-900 flex items-center justify-center shadow-lg shrink-0">
            <ShoppingCart className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold font-bengali tracking-tight">'জয়ধ্বনি' গীত পুস্তকের মুদ্রিত সংস্করণ</h4>
            <p className="text-sm text-white/90 font-medium font-bengali">মূল্য: ১৫০ টাকা + কুরিয়ার চার্জ</p>
            <p className="text-xs text-amber-200 font-black uppercase tracking-widest pt-2">বইটি সংগ্রহ করতে আমাদের সাথে যোগাযোগ করুন</p>
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/10 w-full flex flex-col items-center gap-4">
          <div className="bg-white rounded-full px-8 py-3 shadow-xl border border-white/50 group transition-transform active:scale-95">
            <a 
              href="mailto:souravsircar@gmail.com" 
              className="text-sm md:text-base font-black text-emerald-700 hover:text-emerald-600 transition-colors tracking-tight"
            >
              souravsircar@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer Info */}
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
