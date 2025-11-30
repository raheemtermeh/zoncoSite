
import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown, BookOpen, Building2, HelpCircle } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

const mainNavItems: NavItem[] = [
  { label: 'خانه', id: 'home' },
  { label: 'شرکت‌ها', id: 'subsidiaries' },
  { label: 'درباره ما', id: 'about' },
  { label: 'اخبار', id: 'news' },
  { label: 'سهامداران', id: 'investors' },
];

const corporateItems: NavItem[] = [
  { label: 'نوآوری', id: 'innovation' },
  { label: 'پایداری', id: 'sustainability' },
  { label: 'گواهینامه‌ها', id: 'certificates' },
  { label: 'منشور اخلاقی', id: 'ethics' },
  { label: 'شرکای تجاری', id: 'partners' },
];

const resourcesItems: NavItem[] = [
  { label: 'آکادمی زونکو', id: 'academy' },
  { label: 'وبلاگ', id: 'blog' },
  { label: 'رویدادها', id: 'events' },
  { label: 'گالری تصاویر', id: 'gallery' },
  { label: 'مرکز پشتیبانی', id: 'help' },
  { label: 'سوالات متداول', id: 'faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleNav = (pageId: string) => {
    onNavigate(pageId);
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 top-0 start-0 glass border-b border-gray-200 transition-all duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row-reverse justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => handleNav('home')}>
             <span className="text-2xl font-black text-slate-800 tracking-tighter">ZONCO</span>
             <div className="w-8 h-8 bg-blue-600 rounded-br-xl rounded-tl-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
             </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden xl:block">
            <div className="flex space-x-4 space-x-reverse items-center">
              {mainNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activePage === item.id
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Corporate Dropdown */}
              <div className="relative group" onMouseEnter={() => setActiveDropdown('corporate')} onMouseLeave={() => setActiveDropdown(null)}>
                <button 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                    corporateItems.some(i => i.id === activePage) ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  سازمانی <Building2 size={14} />
                </button>
                <div className={`absolute top-full right-0 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 transition-all duration-200 ${activeDropdown === 'corporate' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  {corporateItems.map((item) => (
                    <button key={item.id} onClick={() => handleNav(item.id)} className="block w-full text-right px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">{item.label}</button>
                  ))}
                </div>
              </div>

              {/* Resources Dropdown */}
              <div className="relative group" onMouseEnter={() => setActiveDropdown('resources')} onMouseLeave={() => setActiveDropdown(null)}>
                <button 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-1 ${
                    resourcesItems.some(i => i.id === activePage) ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                  }`}
                >
                  منابع و آموزش <BookOpen size={14} />
                </button>
                <div className={`absolute top-full right-0 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 transition-all duration-200 ${activeDropdown === 'resources' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  {resourcesItems.map((item) => (
                    <button key={item.id} onClick={() => handleNav(item.id)} className="block w-full text-right px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600">{item.label}</button>
                  ))}
                </div>
              </div>

              <button onClick={() => handleNav('careers')} className={`px-3 py-2 rounded-md text-sm font-medium ${activePage === 'careers' ? 'text-blue-600 bg-blue-50' : 'text-slate-600 hover:text-blue-600'}`}>همکاری</button>
            </div>
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
             <button className="flex items-center gap-1 text-slate-500 hover:text-slate-800 text-sm font-medium">
                <Globe size={16} />
                <span>FA</span>
             </button>
             <button 
                onClick={() => handleNav('contact')}
                className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20">
                تماس با ما
             </button>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden glass border-b border-gray-200 max-h-[80vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase">منوی اصلی</div>
            {mainNavItems.map((item) => (
              <button key={item.id} onClick={() => handleNav(item.id)} className="block w-full text-right px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600">{item.label}</button>
            ))}
            <div className="border-t border-slate-100 my-2"></div>
            <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase">سازمانی</div>
            {corporateItems.map((item) => (
              <button key={item.id} onClick={() => handleNav(item.id)} className="block w-full text-right px-3 py-3 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">{item.label}</button>
            ))}
            <div className="border-t border-slate-100 my-2"></div>
            <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase">منابع</div>
            {resourcesItems.map((item) => (
               <button key={item.id} onClick={() => handleNav(item.id)} className="block w-full text-right px-3 py-3 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600">{item.label}</button>
            ))}
             <div className="border-t border-slate-100 my-2"></div>
             <button onClick={() => handleNav('contact')} className="block w-full text-right px-3 py-3 rounded-md text-base font-bold text-blue-600 bg-blue-50">تماس با ما</button>
          </div>
        </div>
      )}
    </nav>
  );
};
