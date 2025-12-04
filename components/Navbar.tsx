import React, { useState, useEffect } from 'react';
import { NavItem } from '../types.ts';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

// Embedded SVG Data URI for the Logo (Gear Top / Bearing Bottom)
// This ensures the logo loads instantly without requiring file uploads or external hosting.
const LOGO_DATA_URI = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='%2300157E'%3E%3Cpath d='M15 5 H35 V95 H15 Z' /%3E%3Cpath d='M35 15 H55 A25 25 0 0 1 55 65 H35 V15 Z' /%3E%3Crect x='56' y='6' width='12' height='10' transform='rotate(-30 62 11)' /%3E%3Crect x='72' y='18' width='12' height='10' transform='rotate(10 78 23)' /%3E%3Cpath d='M35 55 H55 A25 25 0 0 1 55 95 H35 V55 Z' /%3E%3Ccircle cx='55' cy='75' r='14' fill='white' /%3E%3Ccircle cx='55' cy='75' r='8' fill='%2300157E' /%3E%3Ccircle cx='55' cy='65' r='2' fill='white' /%3E%3Ccircle cx='65' cy='75' r='2' fill='white' /%3E%3Ccircle cx='55' cy='83' r='2' fill='white' /%3E%3Ccircle cx='45' cy='75' r='2' fill='white' /%3E%3C/svg%3E";

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Products', path: '/products' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
        return document.documentElement.classList.contains('dark') || localStorage.theme === 'dark';
    }
    return false;
  });

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme Toggle Logic
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  // Determine navbar classes based on state
  const navBackgroundClass = (mobileMenuOpen) 
    ? 'bg-transparent'
    : (isScrolled)
        ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm py-3 md:py-4 border-b border-transparent dark:border-slate-800' 
        : 'bg-transparent py-4 md:py-6';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackgroundClass}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setMobileMenuOpen(false)}>
             <div className="w-12 h-12 flex items-center justify-center">
                 <img 
                   src={LOGO_DATA_URI}
                   alt="Bhandari Brothers" 
                   className={`w-full h-full object-contain transition-transform group-hover:scale-105 duration-300 ${isDark ? 'brightness-0 invert' : ''}`}
                 />
             </div>
             
             <div className="flex flex-col justify-center">
               <span className={`font-bold text-lg tracking-tight leading-none transition-colors ${isDark ? 'text-white' : 'text-[#00157E]'}`}>BHANDARI</span>
               <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>Brothers</span>
             </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all relative py-1 hover:text-[#115FAD] dark:hover:text-blue-400 ${
                  location.pathname === item.path 
                    ? 'text-[#00157E] dark:text-blue-400 font-semibold' 
                    : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#115FAD] dark:bg-blue-400 rounded-full animate-slide-up"></span>
                )}
              </Link>
            ))}
            
            {/* Dark Mode Toggle */}
            <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Toggle Theme"
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <Link to="/products" className="ml-2 bg-[#00157E] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#115FAD] transition-all shadow-lg hover:shadow-blue-900/30 hover:-translate-y-0.5 border border-transparent dark:border-blue-900">
               Explore Catalog
             </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-[#00157E] dark:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                  {isDark ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button 
                className="text-[#00157E] dark:text-white p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors relative z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white dark:bg-slate-950 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden ${
        mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
         <div className="absolute top-24 bottom-10 w-full flex flex-col items-center justify-start gap-8 py-4 px-6 overflow-y-auto">
             {navItems.map((item, idx) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-3xl font-bold transition-all duration-500 transform ${
                    mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${
                    location.pathname === item.path 
                    ? 'text-[#115FAD] dark:text-blue-400' 
                    : 'text-[#00157E] dark:text-white hover:text-[#115FAD] dark:hover:text-blue-300'
                }`}
                style={{ transitionDelay: `${100 + idx * 50}ms` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
             <Link 
               to="/products" 
               className={`mt-4 bg-[#00157E] text-white px-10 py-4 rounded-full text-lg font-medium shadow-xl transition-all duration-500 transform ${
                  mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
               }`}
               style={{ transitionDelay: '400ms' }}
               onClick={() => setMobileMenuOpen(false)}
             >
               Explore Catalog
             </Link>
         </div>
      </div>
    </>
  );
};

export default Navbar;