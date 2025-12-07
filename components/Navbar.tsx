import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-stone-200 dark:border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-colors duration-500">
        <a href="#" className="font-display text-xl tracking-tighter font-bold text-stone-900 dark:text-white relative z-50">
          AUDREYLYN
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-stone-600 dark:text-stone-400">
          <a href="#about" className="hover:text-stone-900 dark:hover:text-white transition-colors">About</a>
          <a href="#internship" className="hover:text-stone-900 dark:hover:text-white transition-colors">Internship</a>
          <a href="#projects" className="hover:text-stone-900 dark:hover:text-white transition-colors">Projects</a>
          <a href="#works" className="hover:text-stone-900 dark:hover:text-white transition-colors">Works</a>
        </div>

        <div className="flex items-center gap-6 relative z-50">
          <button 
            onClick={toggleTheme}
            className="hover:opacity-50 transition-opacity text-stone-900 dark:text-white"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-stone-900 dark:text-white hover:opacity-50 transition-opacity"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-stone-50 dark:bg-[#050505] pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col gap-8 text-2xl font-display text-stone-900 dark:text-white">
          <a href="#about" onClick={toggleMenu} className="border-b border-stone-200 dark:border-white/10 pb-4 block">About</a>
          <a href="#internship" onClick={toggleMenu} className="border-b border-stone-200 dark:border-white/10 pb-4 block">Internship</a>
          <a href="#projects" onClick={toggleMenu} className="border-b border-stone-200 dark:border-white/10 pb-4 block">Projects</a>
          <a href="#works" onClick={toggleMenu} className="border-b border-stone-200 dark:border-white/10 pb-4 block">Works</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;