import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Code2, Database, LayoutTemplate, FileText, Bug, Users, Settings, Wrench, Network, X, Camera } from 'lucide-react';

interface Venture {
  icon: React.ReactNode;
  color: string;
  title: string;
  desc: string;
  stat: string;
  iconBg: string;
  gallery: string[];
}

const ventures: Venture[] = [
  {
    icon: <Settings className="w-5 h-5" />,
    color: 'orange',
    title: 'Installation',
    desc: 'Assisting with hardware and software installation and setting up new computer systems.',
    stat: 'System Setup',
    iconBg: 'bg-orange-100 text-orange-600',
    gallery: [
      'images/learningAims/Installation1.jpg',
      'images/learningAims/Installation2.jpg',
      'images/learningAims/Installation3.jpeg',
    ]
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    color: 'blue',
    title: 'Troubleshooting',
    desc: 'Diagnosing and resolving defective hardware units and software issues.',
    stat: 'Maintenance',
    iconBg: 'bg-blue-100 text-blue-600',
    gallery: [
      'images/learningAims/Troubleshooting1.jpg',
      'images/learningAims/duties4.jpg',
      'images/learningAims/duty.jpg'
    ]
  },
  {
    icon: <LayoutTemplate className="w-5 h-5" />,
    color: 'emerald',
    title: 'System Updates',
    desc: 'Conducting regular system maintenance and updates to ensure optimal performance.',
    stat: 'Operations',
    iconBg: 'bg-emerald-100 text-emerald-600',
    gallery: [
      'images/learningAims/SystemUpdates1.jpg',
      'images/learningAims/SystemUpdates2.jpg',
      'images/learningAims/SystemUpdates3.jpg'
    ]
  },
  {
    icon: <Database className="w-5 h-5" />,
    color: 'purple',
    title: 'Management',
    desc: 'Participating in hardware and software management tasks and inventory.',
    stat: 'Inventory',
    iconBg: 'bg-purple-100 text-purple-600',
    gallery: [
      'images/learningAims/Management1.jpeg',
      'images/learningAims/schedule1.jpg',
      'images/learningAims/schedule2.jpg'
    ]
  },
  {
    icon: <Network className="w-5 h-5" />,
    color: 'rose',
    title: 'Networking',
    desc: 'Gaining understanding of basic networking concepts and connectivity.',
    stat: 'Network',
    iconBg: 'bg-rose-100 text-rose-600',
    gallery: [
      'images/learningAims/Networking1.jpg',
      'images/learningAims/Networking2.jpeg',
      'images/learningAims/Networking3.jpeg'
    ]
  },
];

const Ventures: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedVenture, setSelectedVenture] = useState<Venture | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Approximate card width + gap
      const container = scrollContainerRef.current;
      
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (selectedVenture) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedVenture]);

  return (
    <section id="works" className="py-24 border-b border-stone-200 bg-stone-50 overflow-hidden transition-colors duration-500 relative">
      <style>
        {`
          @keyframes modalFadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-modal-fade-up {
            animation: modalFadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>
      
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
        <div>
          <span className="text-xs text-orange-600 uppercase tracking-widest mb-2 block transition-colors duration-500">Agreed Program of Work</span>
          <h2 className="text-3xl md:text-4xl font-display text-stone-900 transition-colors duration-500">Duties & Learning Aims</h2>
        </div>
        <div className="hidden md:flex gap-2">
          <button 
            onClick={() => scroll('left')}
            className="w-12 h-12 border border-stone-200 flex items-center justify-center hover:bg-stone-200 transition-colors text-stone-600 active:scale-95"
            aria-label="Scroll Left"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-12 h-12 border border-stone-200 flex items-center justify-center hover:bg-stone-200 transition-colors text-stone-600 active:scale-95"
            aria-label="Scroll Right"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Snap Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 md:px-12 pb-12 hide-scrollbar scroll-smooth"
      >
        {ventures.map((v, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedVenture(v)}
            className="min-w-[85vw] md:min-w-[400px] snap-center bg-white border border-stone-200 p-8 flex flex-col justify-between group hover:border-stone-400 transition-all cursor-pointer relative"
          >
             {/* Indicator for clickable */}
             <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-4 h-4 text-stone-400" />
             </div>

            <div className="mb-12">
              <div className={`w-10 h-10 ${v.iconBg} rounded flex items-center justify-center mb-6 transition-colors`}>
                {v.icon}
              </div>
              <h3 className="text-xl font-display text-stone-900 mb-3 transition-colors">{v.title}</h3>
              <p className="text-stone-600 text-sm font-light leading-relaxed transition-colors">
                {v.desc}
              </p>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-stone-500 border-t border-stone-100 pt-4 transition-colors">
              <span>{v.stat}</span>
              <span className="group-hover:text-stone-900 transition-colors flex items-center gap-2">
                View Task <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Modal */}
      {selectedVenture && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-stone-200/95 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedVenture(null)}
          ></div>
          
          <div className="relative w-full max-w-6xl h-[85vh] bg-white border border-stone-200 shadow-2xl overflow-hidden flex flex-col animate-modal-fade-up rounded-2xl">
            
            {/* Header */}
            <div className="flex items-start justify-between p-6 md:p-10 border-b border-stone-100 bg-stone-50 z-10">
                <div className="flex gap-6 items-start">
                    <div className={`w-14 h-14 ${selectedVenture.iconBg} rounded-xl flex items-center justify-center shrink-0`}>
                        {React.cloneElement(selectedVenture.icon as React.ReactElement<{ className?: string }>, { className: 'w-7 h-7' })}
                    </div>
                    <div>
                        <span className="text-xs text-stone-400 uppercase tracking-widest block mb-1">Task Gallery</span>
                        <h2 className="text-2xl md:text-3xl font-display text-stone-900 mb-2">{selectedVenture.title}</h2>
                        <p className="text-stone-500 text-sm max-w-xl">{selectedVenture.desc}</p>
                    </div>
                </div>
                <button 
                    onClick={() => setSelectedVenture(null)}
                    className="p-2 bg-stone-100 rounded-full text-stone-500 hover:text-stone-900 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Gallery Grid - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-stone-50/50 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedVenture.gallery.map((img, idx) => (
                        <div 
                            key={idx} 
                            className={`relative rounded-xl overflow-hidden group border border-stone-200 ${idx % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'}`}
                        >
                            <img 
                                src={img} 
                                alt={`${selectedVenture.title} ${idx + 1}`} 
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    ))}
                </div>
                
                {/* Footer Note */}
                <div className="mt-12 pt-8 border-t border-stone-200 text-center">
                    <p className="text-stone-400 text-xs uppercase tracking-widest">
                        Documented Proof of {selectedVenture.title}
                    </p>
                </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Ventures;