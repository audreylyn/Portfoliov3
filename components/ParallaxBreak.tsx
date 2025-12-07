import React from 'react';

const ParallaxBreak: React.FC = () => {
  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-white/10 dark:bg-black/40 z-10 flex items-center justify-center transition-colors duration-500">
        <h2 className="text-4xl md:text-6xl font-display text-white tracking-tight text-center px-4 drop-shadow-lg">
          Building robust systems <br /> with <span className="italic font-serif">modern solutions.</span>
        </h2>
      </div>
      <img 
        src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop" 
        className="w-full h-full object-cover fixed-attachment" 
        alt="Technology Background" 
      />
    </div>
  );
};

export default ParallaxBreak;