import React from 'react';
import { Heart, ShieldCheck, Cpu, User, Music, Search, Mic, Type, Youtube, Smartphone, Mail, Info, Monitor } from 'lucide-react';
import { toBengaliNumber } from '../utils/format';

const PortraitPhoto = ({ className }: { className?: string }) => {
  const [hasError, setHasError] = React.useState(false);
  const imageUrl = "https://i.postimg.cc/tJNKMtB4/portrait.jpg";

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-4 bg-emerald-600/10 blur-2xl rounded-sm opacity-50" />
      <div className="relative border-4 border-[var(--bg-card)] shadow-xl overflow-hidden bg-slate-50 rounded-sm inline-block">
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
    <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div className="space-y-1">
      <h4 className="text-sm font-black text-[var(--text-main)] tracking-tight">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

const InfoView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 pt-6 space-y-6 animate-in fade-in duration-1000 font-bengali pb-32">
      {/* Dedication Section */}
      <div className="bg-[var(--bg-card)] p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-[var(--border-color)] flex flex-col items-center text-center space-y-8">
        <h3 className="text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-2">উৎসর্গ</h3>
        <PortraitPhoto className="" />
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-2xl font-black text-[var(--text-main)]">স্বর্গীয় বিভু রঞ্জন সরকার</p>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
              জন্ম : ১লা আগস্ট ১৯২৮ — নিদ্রিত : ৩০শে ডিসেম্বর ১৯৮৫
            </p>
          </div>
          <p className="text-lg text-slate-700 leading-relaxed max-w-sm mx-auto font-medium">
            আমাদের পিতৃব্য স্বর্গীয় বিভু রঞ্জন সরকার মহাশয়ের স্মরণার্থে ‘জয়ধ্বনি’ অ্যাপটি উৎসর্গীকৃত।
          </p>
        </div>
        <div className="flex items-center gap-4 text-emerald-600/10">
           <Heart className="w-6 h-6 fill-current" />
           <Heart className="w-6 h-6 fill-current" />
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-[var(--bg-card)] p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-[var(--border-color)] flex flex-col items-center text-center space-y-6">
        <h3 className="text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-2">ভূমিকা</h3>
        <div className="space-y-5 text-slate-700 leading-relaxed font-medium max-w-2xl">
          <p className="text-emerald-600 font-bold italic text-lg border-l-4 border-emerald-500 pl-4 py-1 bg-emerald-50/30 rounded-r-xl">
            সব গৌরব, প্রশংসা ও স্তুতি কেবল আমাদের প্রেমময় পিতা ঈশ্বর ও ত্রাণকর্তা প্রভু যীশু খ্রীষ্টেরই প্রাপ্য।
          </p>
          <p className="text-[15px]">
            ১৯৬৪ সালে ভ্রাতা বিভু রঞ্জন সরকার মহাশয়ের প্রচেষ্টায় 'জয়ধ্বনি' গীত পুস্তকটি প্রথম প্রকাশিত হয়। দীর্ঘ কয়েক দশক ধরে এই সংকলনটি খ্রীষ্টীয় আরাধনায় এক বিশেষ ভূমিকা পালন করে আসছে। সেই ঐতিহ্যকে আধুনিক প্রজন্মের কাছে পৌঁছে দিতে এবং ডিজিটাল মাধ্যমে এর ব্যবহার সহজতর করতে এই অ্যাপটি নির্মাণ করা হয়েছে। আমাদের প্রার্থনা, পশ্চিমবঙ্গ ও বাংলাদেশের সকল বাংলা মণ্ডলী যেন এই ডিজিটাল সংস্করণের মাধ্যমে উপকৃত হন।
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[var(--bg-card)] p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-[var(--border-color)] flex flex-col items-center text-center space-y-8">
        <div className="w-full flex flex-col items-center space-y-2">
          <h3 className="text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-2">অ্যাপের প্রধান বৈশিষ্ট্যসমূহ</h3>
          <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full">
            <Monitor className="w-3 h-3 text-slate-500" />
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">সংস্করণ ১.০ • ১১ এপ্রিল ২০২৬</span>
          </div>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 text-left w-full">
          <FeatureItem 
            icon={<Music className="w-5 h-5" />}
            title="বিশাল ভাণ্ডার"
            desc="৪৫০ টিরও বেশি ঐতিহ্যবাহী স্তোত্রগান এবং সমকালীন কোরাস গানের সংগ্রহ। নিয়মিতভাবে নতুন গান সংযোজন করা হচ্ছে।"
          />
          <FeatureItem 
            icon={<Search className="w-5 h-5" />}
            title="উন্নত অনুসন্ধান (Search)"
            desc="গান নম্বর, শিরোনাম বা গানের কলি দিয়ে খোঁজার পাশাপাশি ইংরেজি হরফে বাংলা লিখেও (Phonetic Search) গান খুঁজে পাওয়া সম্ভব।"
          />
          <FeatureItem 
            icon={<Mic className="w-5 h-5" />}
            title="ভয়েস সার্চ"
            desc="দ্রুত গান খোঁজার জন্য এতে যুক্ত করা হয়েছে বাংলা ভয়েস রিকগনিশন সুবিধা।"
          />
          <FeatureItem 
            icon={<Heart className="w-5 h-5" />}
            title="ব্যক্তিগতকরণ"
            desc="আপনার প্রিয় গানগুলো আলাদাভাবে 'Favorites' তালিকায় সংরক্ষণ করার সুবিধা।"
          />
          <FeatureItem 
            icon={<Type className="w-5 h-5" />}
            title="সহজ পঠনযোগ্যতা"
            desc="পড়ার সুবিধার্থে ফন্টের আকার পরিবর্তন এবং বিভিন্ন বাংলা ফন্ট ব্যবহারের সুবিধা।"
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
          <FeatureItem 
            icon={<Monitor className="w-5 h-5" />}
            title="সংস্করণ ১.০"
            desc="সর্বশেষ আপডেট: ১১ এপ্রিল ২০২৬। নিয়মিতভাবে নতুন গান ও ফিচার সংযোজন করা হচ্ছে।"
          />
        </div>
      </div>

      {/* Speciality Section */}
      <div className="bg-[var(--bg-card)] p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-[var(--border-color)] flex flex-col items-center text-center space-y-6">
        <h3 className="text-xl font-bold text-[var(--text-main)] border-b-2 border-emerald-500/20 pb-2">বিশেষত্ব</h3>
        <div className="space-y-4 text-slate-700 leading-relaxed font-medium max-w-2xl">
          <p className="text-[15px]">
            ‘জয়ধ্বনি’ অ্যাপটির অন্যতম প্রধান বিশেষত্ব হলো এর ব্যবহারকারী-বান্ধব ইন্টারফেস এবং নির্ভুল বাংলা লিরিক্স। এটি কেবল একটি গান দেখার মাধ্যম নয়, বরং মণ্ডলীর আরাধনায় সহায়তার জন্য একটি পূর্ণাঙ্গ ডিজিটাল সরঞ্জাম।
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100/50 text-left">
              <h5 className="font-bold text-emerald-700 mb-1">নির্ভুলতা</h5>
              <p className="text-xs opacity-80">মূল গীত পুস্তকের সাথে সামঞ্জস্য রেখে প্রতিটি গানের বানান ও যতিচিহ্ন যাচাই করা হয়েছে।</p>
            </div>
            <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100/50 text-left">
              <h5 className="font-bold text-emerald-700 mb-1">গতি ও সাবলীলতা</h5>
              <p className="text-xs opacity-80">অত্যন্ত হালকা ও দ্রুতগতির হওয়ায় যেকোনো স্মার্টফোনে এটি অনায়াসেই ব্যবহার করা যায়।</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-emerald-600 p-6 md:p-8 rounded-3xl shadow-xl shadow-emerald-200/40 text-white flex flex-col items-center text-center space-y-5">
        <h3 className="text-xl font-bold text-white border-b-2 border-white/20 pb-2">যোগাযোগ</h3>
        <p className="text-lg font-medium opacity-90 leading-relaxed max-w-md">
          আপনার কোনো পরামর্শ থাকলে বা নতুন কোনো গান যুক্ত করতে চাইলে আমাদের সাথে যোগাযোগ করতে পারেন।
        </p>
       
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 space-y-1">
          <p className="text-sm font-bold">গীত পুস্তকের হার্ডকপি সংগ্রহ করতে:</p>
          <p className="text-xl font-black">১৫০ টাকা <span className="text-sm font-normal opacity-70">+ ডাক খরচ (প্রযোজ্য ক্ষেত্রে)</span></p>
          <p className="text-[10px] uppercase tracking-tighter opacity-50 pt-1">Physical copy: Rs. 150 + postage (if applicable)</p>
        </div>
        <div className="pt-2">
          <a
            href="mailto:souravsircar@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 rounded-2xl font-bold text-sm hover:bg-emerald-50 transition-colors shadow-lg shadow-black/5"
          >
            <Mail className="w-4 h-4" />
            souravsircar@gmail.com
          </a>
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
