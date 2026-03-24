import React from 'react';
import { TabType } from '../types';
import { Home, List, Settings } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans transition-colors duration-300">
      <div className="flex-grow pb-24">
        {children}
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-slate-100 px-4 pb-6 pt-3 md:hidden z-40">
        <div className="max-w-md mx-auto flex items-center justify-around">
          <MobileNavItem active={activeTab === 'home'} onClick={() => setActiveTab('home')} icon={<Home className="w-6 h-6" />} label="সূচী" />
          <MobileNavItem active={activeTab === 'collection'} onClick={() => setActiveTab('collection')} icon={<List className="w-6 h-6" />} label="সংগ্রহ" />
          <MobileNavItem active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} icon={<Settings className="w-6 h-6" />} label="সেটিংস" />
        </div>
      </nav>
    </div>
  );
};

const MobileNavItem = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-emerald-600' : 'text-slate-300'}`}>
    {icon}
    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </button>
);

export default Layout;
