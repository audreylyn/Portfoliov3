import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const interiors = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=1200&auto=format&fit=crop',
    label: 'Hardware • Troubleshooting'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    label: 'Software • Installation'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bbc7c?q=80&w=1200&auto=format&fit=crop',
    label: 'Networking • Concepts'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    label: 'Web Dev • UI/UX'
  }
];

const Interiors: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollClick = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth * 0.8 : window.innerWidth * 0.45;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="py-24 bg-stone-50 border-b border-stone-200 transition-colors duration-500">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <span className="text-xs text-orange-600 uppercase tracking-widest mb-2 block transition-colors duration-500">Technical Domain</span>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 transition-colors duration-500">Areas of Experience</h2>
        </div>
        <button 
          onClick={handleScrollClick}
          className="hidden md:flex gap-4 cursor-pointer hover:opacity-70 transition-opacity group"
          aria-label="Scroll Gallery Right"
        >
          <span className="text-xs text-stone-500 uppercase tracking-widest self-center">Scroll</span>
          <ArrowRight className="w-5 h-5 text-stone-500 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-2 px-6 md:px-12 pb-8 hide-scrollbar scroll-smooth"
      >
        {interiors.map((item) => (
          <div key={item.id} className="min-w-[80vw] md:min-w-[45vw] snap-center group relative aspect-[16/9] overflow-hidden bg-stone-200">
            <img 
              src={item.image} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
              alt="Interior" 
            />
            <div className="absolute bottom-4 left-4 z-10">
              <span className="px-3 py-1 bg-white/80 backdrop-blur text-stone-900 text-[10px] uppercase tracking-wider border border-stone-200">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interiors;