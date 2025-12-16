import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200 py-4 px-6 md:px-12 flex justify-between items-center transition-colors duration-500">
        <a href="#" className="font-display text-xl tracking-tighter font-bold text-stone-900 relative z-50">
          AUDREYLYN
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase text-stone-600">
          <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
          <a href="#internship" className="hover:text-stone-900 transition-colors">Internship</a>
          <a href="#projects" className="hover:text-stone-900 transition-colors">Projects</a>
          <a href="#works" className="hover:text-stone-900 transition-colors">Works</a>
        </div>

        <div className="flex items-center gap-6 relative z-50">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-stone-900 hover:opacity-50 transition-opacity"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-stone-50 pt-24 px-6 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col gap-8 text-2xl font-display text-stone-900">
          <a href="#about" onClick={toggleMenu} className="border-b border-stone-200 pb-4 block">About</a>
          <a href="#internship" onClick={toggleMenu} className="border-b border-stone-200 pb-4 block">Internship</a>
          <a href="#projects" onClick={toggleMenu} className="border-b border-stone-200 pb-4 block">Projects</a>
          <a href="#works" onClick={toggleMenu} className="border-b border-stone-200 pb-4 block">Works</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;