import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-100 pt-24 pb-8 border-t border-stone-200 transition-colors duration-500 overflow-hidden">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
            
            {/* Nav Links */}
            <div className="grid grid-cols-2 gap-12 md:gap-32 w-full md:w-auto">
                <div className="flex flex-col gap-4">
                    <span className="text-xs text-stone-400 uppercase tracking-widest mb-2 font-semibold">Sitemap</span>
                    <a href="#about" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">About</a>
                    <a href="#internship" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">Internship</a>
                    <a href="#projects" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">Projects</a>
                    <a href="#works" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">Works</a>
                </div>
                <div className="flex flex-col gap-4">
                    <span className="text-xs text-stone-400 uppercase tracking-widest mb-2 font-semibold">Socials</span>
                    <a href="#" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">LinkedIn</a>
                    <a href="#" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">GitHub</a>
                    <a href="#" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">Facebook</a>
                </div>
            </div>

            {/* Back to Top */}
            <button 
                onClick={scrollToTop}
                className="group flex flex-col items-center gap-2 self-start md:self-start"
            >
                <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 group-hover:bg-stone-900 group-hover:text-white transition-all duration-300">
                    <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 group-hover:text-stone-900 transition-colors">Back to Top</span>
            </button>
        </div>

        {/* Big Text */}
        <div className="relative border-t border-stone-200 pt-8">
            <h1 className="text-[12vw] leading-[0.8] font-display font-bold text-stone-200 text-center select-none pointer-events-none tracking-tighter">
                AUDREYLYN
            </h1>
            <div className="absolute bottom-2 md:bottom-4 w-full flex justify-between text-[10px] md:text-xs text-stone-400 uppercase tracking-widest px-1">
                <span>© 2024 Audreylyn Moraña</span>
                <span>All Rights Reserved</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;