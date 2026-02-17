import React from 'react';
import { TabType } from '../types';
import { Home, List, Heart, Info } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <nav className="bg-white border-b border-slate-100 px-4 sticky top-0 z-40 hidden md:block">
        <div className="max-w-2xl mx-auto flex items-center justify-between h-16">
          <span className="font-black text-emerald-600 text-xl tracking-tight">জয়ধ্বনি</span>
          <div className="flex gap-1">
            <NavButton active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={<Home className="w-4 h-4" />} label="সূচী" />
            <NavButton active={activeTab === 'category'} onClick={() => setActiveTab('category')} icon={<List className="w-4 h-4" />} label="বিষয়" />
            <NavButton active={activeTab === 'fav'} onClick={() => setActiveTab('fav')} icon={<Heart className="w-4 h-4" />} label="প্রিয়" />
            <NavButton active={activeTab === 'info'} onClick={() => setActiveTab('info')} icon={<Info className="w-4 h-4" />} label="তথ্য" />
          </div>
        </div>
      </nav>

      {/* Changed from <main> to <div> to allow children (like SongDetail) to use their own <main> semantic tag */}
      <div className="flex-grow pb-24">
        {children}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-slate-100 px-4 pb-6 pt-3 md:hidden z-40">
        <div className="max-w-md mx-auto flex items-center justify-around">
          <MobileNavItem active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={<Home className="w-6 h-6" />} label="সূচী" />
          <MobileNavItem active={activeTab === 'category'} onClick={() => setActiveTab('category')} icon={<List className="w-6 h-6" />} label="বিষয়" />
          <MobileNavItem active={activeTab === 'fav'} onClick={() => setActiveTab('fav')} icon={<Heart className="w-6 h-6" />} label="প্রিয়" />
          <MobileNavItem active={activeTab === 'info'} onClick={() => setActiveTab('info')} icon={<Info className="w-6 h-6" />} label="তথ্য" />
        </div>
      </nav>
    </div>
  );
};

const NavButton = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) => (
  <button onClick={onClick} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${active ? 'bg-emerald-50 text-emerald-600' : 'text-slate-400 hover:bg-slate-50'}`}>
    {icon}
    <span>{label}</span>
  </button>
);

const MobileNavItem = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-emerald-600' : 'text-slate-300'}`}>
    {icon}
    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </button>
);

export default Layout;