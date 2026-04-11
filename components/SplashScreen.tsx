import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MainLogo } from './Logo';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Fallback for onExitComplete
      setTimeout(onComplete, 1000);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[var(--bg-card)] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2
            }}
            className="relative"
          >
            {/* Animated background glow */}
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute inset-0 bg-emerald-400 blur-3xl rounded-full"
            />
            
            <MainLogo className="w-32 h-32 relative z-10 shadow-2xl rounded-[2rem] overflow-hidden" />
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 text-center"
          >
            <h1 className="text-4xl font-black text-emerald-600 font-logo tracking-tight leading-none">জয়ধ্বনি</h1>
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.3em] mt-3">বাংলা খ্রীষ্টিয় সংগীত</p>
          </motion.div>

          {/* Loading bar */}
          <div className="absolute bottom-16 w-48 h-1 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="w-full h-full bg-emerald-500"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
