import React, { useState } from 'react';
import { loginWithGoogle, loginAsGuest } from '../firebase';
import { LogIn, UserCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { MainLogo } from './Logo';

interface AuthViewProps {
  onAuthSuccess: () => void;
}

const AuthView: React.FC<AuthViewProps> = ({ onAuthSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await loginWithGoogle();
      onAuthSuccess();
    } catch (err) {
      setError('গুগল লগইন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।');
      setLoading(false);
    }
  };

  const handleGuestLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await loginAsGuest();
      onAuthSuccess();
    } catch (err) {
      setError('অতিথি লগইন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-bengali">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl shadow-emerald-500/10 p-8 border border-slate-100 text-center"
      >
        <div className="flex justify-center mb-6">
          <MainLogo className="w-24 h-24 shadow-xl rounded-[2rem] overflow-hidden" />
        </div>
        
        <h1 className="text-4xl font-black text-brand font-logo tracking-tight leading-none mb-2">জয়ধ্বনি</h1>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.25em] mb-8">বাংলা খ্রীষ্টিয় সংগীত</p>
        
        <div className="space-y-4">
          <button
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 bg-emerald-500 py-4 rounded-2xl font-bold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-all active:scale-[0.98] disabled:opacity-50"
          >
            <LogIn className="w-5 h-5" />
            গুগল দিয়ে প্রবেশ করুন
          </button>
        </div>

        {error && (
          <p className="mt-4 text-rose-500 text-sm font-medium animate-in fade-in slide-in-from-top-2">
            {error}
          </p>
        )}

        <div className="mt-12 grid grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 rounded-2xl text-left">
            <Sparkles className="w-5 h-5 text-emerald-500 mb-2" />
            <h3 className="text-xs font-bold text-slate-800 mb-1">সহজ অনুসন্ধান</h3>
            <p className="text-[10px] text-slate-400 leading-relaxed">নাম বা নম্বর দিয়ে দ্রুত গান খুঁজুন</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl text-left">
            <ShieldCheck className="w-5 h-5 text-emerald-500 mb-2" />
            <h3 className="text-xs font-bold text-slate-800 mb-1">সুরক্ষিত</h3>
            <p className="text-[10px] text-slate-400 leading-relaxed">আপনার তথ্য আমাদের কাছে সুরক্ষিত</p>
          </div>
        </div>
      </motion.div>
      
      <p className="mt-8 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
        © ২০২৬ জয়ধ্বনি টিম
      </p>
    </div>
  );
};

export default AuthView;
