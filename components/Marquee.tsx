import React from 'react';
import { Wrench, Download, Monitor, Settings, Network, Cpu } from 'lucide-react';

// Helper to render SimpleIcons from CDN
// Using a consistent hex color in the URL, but relying on CSS filter for perfect theme matching
const TechIcon = ({ slug, title }: { slug: string, title: string }) => (
  <img 
    src={`https://cdn.simpleicons.org/${slug}/78716c`} 
    alt={title}
    className="w-5 h-5 md:w-6 md:h-6 opacity-70 group-hover:opacity-100 transition-opacity" 
    loading="lazy"
  />
);

const Marquee: React.FC = () => {
  const items = [
    // General Skills (Lucide Icons)
    { 
      name: "Hardware", 
      icon: <Wrench className="w-5 h-5 md:w-6 md:h-6 text-stone-500 opacity-70 group-hover:opacity-100 transition-opacity" />,
    },
    { 
      name: "Installation", 
      icon: <Download className="w-5 h-5 md:w-6 md:h-6 text-stone-500 opacity-70 group-hover:opacity-100 transition-opacity" />,
    },
    { 
      name: "OS Config", 
      icon: <Monitor className="w-5 h-5 md:w-6 md:h-6 text-stone-500 opacity-70 group-hover:opacity-100 transition-opacity" />,
    },
    { 
      name: "Maintenance", 
      icon: <Settings className="w-5 h-5 md:w-6 md:h-6 text-stone-500 opacity-70 group-hover:opacity-100 transition-opacity" />,
    },
    { 
      name: "Networking", 
      icon: <Network className="w-5 h-5 md:w-6 md:h-6 text-stone-500 opacity-70 group-hover:opacity-100 transition-opacity" />,
    },
    { 
      name: "Setup", 
      icon: <Cpu className="w-5 h-5 md:w-6 md:h-6 text-stone-500 opacity-70 group-hover:opacity-100 transition-opacity" />,
    },
    
    // Tech Stack (Brand Icons - Monochromatic)
    { name: "HTML5", icon: <TechIcon slug="html5" title="HTML5" /> },
    { name: "CSS3", icon: <TechIcon slug="css3" title="CSS3" /> },
    { name: "JavaScript", icon: <TechIcon slug="javascript" title="JavaScript" /> },
    { name: "PHP", icon: <TechIcon slug="php" title="PHP" /> },
    { name: "Laravel", icon: <TechIcon slug="laravel" title="Laravel" /> },
    { name: "MySQL", icon: <TechIcon slug="mysql" title="MySQL" /> },
    { name: "Git", icon: <TechIcon slug="git" title="Git" /> },
    { name: "Figma", icon: <TechIcon slug="figma" title="Figma" /> },
    { name: "React", icon: <TechIcon slug="react" title="React" /> },
    { name: "Tailwind", icon: <TechIcon slug="tailwindcss" title="Tailwind" /> }
  ];
  
  // Triple duplicates to ensure seamless scrolling on wider screens
  const displayedItems = [...items, ...items, ...items];

  return (
    <div className="relative z-20 py-8 bg-stone-100 border-y border-stone-200 overflow-hidden transition-colors duration-500">
      
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-stone-100 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-stone-100 to-transparent z-10"></div>

      <div className="whitespace-nowrap flex items-center animate-marquee hover:[animation-play-state:paused] gap-3">
        {displayedItems.map((item, index) => (
          <div 
            key={index} 
            className="group flex items-center gap-3 px-5 py-2.5 bg-white border border-stone-200 rounded-full shadow-sm hover:border-stone-300 transition-all duration-300 cursor-default select-none"
          >
            {/* Icons are forced to grayscale for consistency */}
            <div className="flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                {item.icon}
            </div>
            <span className="font-display font-medium text-sm text-stone-600 group-hover:text-stone-900 transition-colors">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;