import React from 'react';
import { Heart, ShieldCheck, Cpu, User, Music, Search, Mic, Type, Youtube, Smartphone, Mail, Info, Facebook, ArrowRight, ShoppingCart } from 'lucide-react';
import { toBengaliNumber } from '../utils/format';
import { motion } from 'motion/react';

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

const FeatureItem = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex gap-4 items-start group">
    <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <div className="space-y-1">
      <h4 className="text-sm font-black text-slate-800 tracking-tight">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
);

const InfoView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 pt-6 space-y-6 animate-in fade-in duration-1000 font-bengali pb-32">
      {/* Header Branding - Integrated with Cross */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center space-y-6">
        <div className="flex items-center justify-center">
          {/* Cross Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="w-32 md:w-40 flex items-center justify-center">
              <img 
                src="/Cross.jpg" 
                alt="Cross with Red Cloth"
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain filter contrast-[1.05] brightness-[1.05]"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </motion.div>
        </div>

        <div className="space-y-4 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-emerald-700 font-bold italic text-base md:text-lg border-x-4 border-emerald-500/30 px-6 py-2 bg-emerald-50/50 rounded-2xl leading-relaxed">
              সব গৌরব, প্রশংসা ও স্তুতি কেবল আমাদের প্রেমময় পিতা ঈশ্বর ও ত্রাণকর্তা প্রভু যীশু খ্রীষ্টেরই প্রাপ্য।
            </p>
          </motion.div>
        </div>
      </div>

      {/* Dedication Section */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center space-y-6">
        <h3 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-2">স্বর্গীয় বিভু রঞ্জন সরকার</h3>
        <PortraitPhoto className="" />
        <div className="space-y-4">
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            জন্ম : ১লা আগস্ট ১৯২৮ — নিদ্রিত : ৩০শে ডিসেম্বর ১৯৮৫
          </p>
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
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center space-y-6">
        <h3 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-2">ভূমিকা</h3>
        <div className="space-y-5 text-slate-700 leading-relaxed font-medium max-w-2xl px-2">
          <p className="text-[15px]">
            ১৯৬৪ সালে ভ্রাতা বিভু রঞ্জন সরকার মহাশয়ের প্রচেষ্টায় 'জয়ধ্বনি' গীত পুস্তকটি প্রথম প্রকাশিত হয়। দীর্ঘ কয়েক দশক ধরে এই সংকলনটি খ্রীষ্টীয় আরাধনায় এক বিশেষ ভূমিকা পালন করে আসছে। সেই ঐতিহ্যকে আধুনিক প্রজন্মের কাছে পৌঁছে দিতে এবং ডিজিটাল মাধ্যমে এর ব্যবহার সহজতর করতে এই অ্যাপটি নির্মাণ করা হয়েছে। আমাদের প্রার্থনা, পশ্চিমবঙ্গ ও বাংলাদেশের সকল বাংলা মণ্ডলী যেন এই ডিজিটাল সংস্করণের মাধ্যমে উপকৃত হন।
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center space-y-8">
        <h3 className="text-xl font-bold text-slate-800 border-b-2 border-emerald-500/20 pb-2">অ্যাপের প্রধান বৈশিষ্ট্যসমূহ</h3>
        
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

      {/* Contact & Social Section */}
      <div className="bg-emerald-600 p-6 md:p-8 rounded-3xl shadow-xl shadow-emerald-200/40 text-white flex flex-col items-center text-center space-y-6">
        <h3 className="text-xl font-bold text-white border-b-2 border-white/20 pb-2">আমাদের সাথে যুক্ত থাকুন</h3>
        <p className="text-lg font-medium opacity-90 leading-relaxed max-w-md">
          নতুন গানের আপডেট পেতে এবং আমাদের সাথে সরাসরি যোগাযোগ করতে নিচের মাধ্যমগুলো ব্যবহার করুন।
        </p>

        {/* Physical Book Option */}
        <div className="w-full max-w-md bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-amber-400 text-amber-900 flex items-center justify-center shrink-0">
            <ShoppingCart className="w-6 h-6" />
          </div>
          <div className="space-y-0.5">
            <h4 className="font-bold text-white font-bengali">'জয়ধ্বনি' গীত পুস্তকের হার্ডকপি</h4>
            <p className="text-xs text-white/80 font-medium font-bengali">মূল্য: ১৫০ টাকা + কুরিয়ার চার্জ</p>
            <p className="text-[10px] text-amber-200 font-bold uppercase tracking-wider">বইটি সংগ্রহ করতে আমাদের সাথে যোগাযোগ করুন</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-2">
          <a 
            href="https://www.facebook.com/profile.php?id=61578663071457" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 px-6 py-4 bg-white text-emerald-600 rounded-2xl font-bold text-sm hover:bg-emerald-50 transition-all shadow-lg group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-slate-400">Facebook Page</div>
                <div>অফিসিয়াল ফেসবুক পেজ</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>

          <a 
            href="https://www.youtube.com/@jayodhoni" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3 px-6 py-4 bg-white text-emerald-600 rounded-2xl font-bold text-sm hover:bg-emerald-50 transition-all shadow-lg group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 text-red-600 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-widest text-slate-400">Youtube Channel</div>
                <div>অফিসিয়াল ইউটিউব চ্যানেল</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        <div className="pt-4 border-t border-white/10 w-full mt-4">
          <a 
            href="mailto:souravsircar@gmail.com" 
            className="inline-flex items-center gap-3 text-sm font-bold text-white hover:text-emerald-100 underline decoration-emerald-200/50 underline-offset-4"
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
