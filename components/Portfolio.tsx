import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { useTheme } from './ThemeContext';

interface ThemeConfig {
  mainBg: string;
  subBg: string;
  text: string;
  title: string;
  border: string;
}

interface Project {
  id: string;
  name: string;
  location: string;
  image: string;
  type: string;
  valuation: string;
  description: string;
  details: string;
  features: string[];
  gallery: string[];
  theme: {
    light: ThemeConfig;
    dark: ThemeConfig;
  };
}

const projects: Project[] = [
  {
    id: '01',
    name: 'Internship Host',
    location: 'Valenzuela City',
    image: 'images/Journey/it_office.png',
    type: 'Company Profile',
    valuation: 'IT Office',
    description: 'Pamantasan ng Lungsod ng Valenzuela (PLV) IT Office located at 8 Tongco, Maysan, Valenzuela City.',
    details: 'The IT Office at PLV serves as the central hub for the university\'s technical infrastructure. Located at 8 Tongco, Maysan, Valenzuela City, 1442 Metro Manila, it handles network administration, hardware maintenance, and software support for the institution.',
    features: ['PLV Maysan', 'Tongco St.', 'Tech Support', 'Education Sector'],
    gallery: ['images/Journey/team1.jpg', 'images/Journey/team2.jpg', 'images/Journey/team3.jpg', 'images/Journey/team1.jpg'],
    theme: {
        light: { mainBg: '#f5f5f4', subBg: '#fafaf9', text: '#57534e', title: '#1c1917', border: '#e7e5e4' }, // Stone
        dark: { mainBg: '#1c1917', subBg: '#0c0a09', text: '#a8a29e', title: '#fafaf9', border: 'rgba(255,255,255,0.05)' }
    }
  },
  {
    id: '02',
    name: 'Supervision',
    location: 'Site Supervisor',
    image: 'images/supervision/supervision1.jpg',
    type: 'Leadership',
    valuation: 'Mentorship',
    description: 'Directly supervised by Sir Diomil Agbayani (09201063627), ensuring streamlined technical operations.',
    details: 'I reported directly to Sir Diomil Agbayani throughout my internship. The supervision structure was collaborative, allowing for hands-on learning in troubleshooting and resolving technical issues while maintaining professional documentation standards.',
    features: ['Sir Diomil Agbayani', 'Direct Reporting', 'Collaboration', 'Guidance'],
    gallery: ['images/supervision/supervision5.jpg', 'images/supervision/supervision2.jpg', 'images/supervision/supervision3.jpg', 'images/supervision/supervision4.jpg'],
    theme: {
        light: { mainBg: '#f1f5f9', subBg: '#f8fafc', text: '#475569', title: '#0f172a', border: '#e2e8f0' }, // Slate
        dark: { mainBg: '#0f172a', subBg: '#020617', text: '#94a3b8', title: '#f1f5f9', border: 'rgba(255,255,255,0.05)' }
    }
  },
  {
    id: '03',
    name: 'Schedule',
    location: 'Mon-Sat',
    image: 'images/schedule/schedule1.jpg',
    type: 'Timeframe',
    valuation: '8AM - 5PM',
    description: 'Adhering to a reporting schedule of Monday to Saturday, 8:00 AM – 5:00 PM.',
    details: 'My internship followed a rigorous six-day work week schedule from 8:00 AM to 5:00 PM. This consistency allowed me to be fully immersed in the daily operations of the IT department, from morning system checks to end-of-day reporting.',
    features: ['Monday-Saturday', '8:00 AM - 5:00 PM', 'Full Time', 'On-Site'],
    gallery: ['images/schedule/schedule1.jpg', 'images/schedule/schedule2.jpg'],
    theme: {
        light: { mainBg: '#fff7ed', subBg: '#fffaf5', text: '#c2410c', title: '#431407', border: '#ffedd5' }, // Orange
        dark: { mainBg: '#2a100a', subBg: '#1a0b06', text: '#fdba74', title: '#fff7ed', border: 'rgba(255,255,255,0.05)' }
    }
  },
  {
    id: '04',
    name: 'Duties',
    location: 'Scope of Work',
    image: 'images/dutybg.jpg',
    type: 'Responsibilities',
    valuation: 'Technical',
    description: 'Assisting with hardware/software installation, setup, troubleshooting, maintenance, and management.',
    details: 'My agreed program of work included assisting with hardware and software installation, setting up new computer systems, troubleshooting defective units, conducting system maintenance and updates, and participating in inventory management.',
    features: ['Installation', 'Troubleshooting', 'Maintenance', 'Setup'],
    gallery: ['images/duties2.png', 'images/duties3.jpeg', 'images/duties4.jpg', 'images/duties5.jpg'],
    theme: {
        light: { mainBg: '#f0fdf4', subBg: '#f5fdf7', text: '#15803d', title: '#14532d', border: '#dcfce7' }, // Emerald
        dark: { mainBg: '#062c20', subBg: '#021812', text: '#86efac', title: '#f0fdf4', border: 'rgba(255,255,255,0.05)' }
    }
  },
  {
    id: '05',
    name: 'Outputs',
    location: 'Sample Works',
    image: 'images/output1.jpg',
    type: 'Deliverables',
    valuation: 'Documentation',
    description: 'Produced installation logs, maintenance schedules, system configuration docs, and progress reports.',
    details: 'While some tasks were confidential, my outputs included preparing detailed documentation and daily reports. I also produced installation and troubleshooting logs, maintenance schedules, and photos of hardware setups (where permitted).',
    features: ['Logs', 'Schedules', 'Reports', 'Configuration'],
    gallery: ['images/output1.jpg', 'images/output2.jpeg', 'images/output3.jpg', 'images/output4.jpg'],
    theme: {
        light: { mainBg: '#eff6ff', subBg: '#f5f8ff', text: '#1d4ed8', title: '#1e3a8a', border: '#dbeafe' }, // Blue
        dark: { mainBg: '#172554', subBg: '#0b1129', text: '#93c5fd', title: '#eff6ff', border: 'rgba(255,255,255,0.05)' }
    }
  }
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentThemeData, setCurrentThemeData] = useState(projects[0].theme);
  const { theme } = useTheme();
  
  const projectRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(index) && projects[index]) {
                setCurrentThemeData(projects[index].theme);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const activeColors = theme === 'dark' ? currentThemeData.dark : currentThemeData.light;

  return (
    <section 
        id="internship" 
        className="relative border-b border-[var(--theme-border)] transition-colors duration-700 ease-in-out"
        style={{
            '--theme-main-bg': activeColors.mainBg,
            '--theme-sub-bg': activeColors.subBg,
            '--theme-text': activeColors.text,
            '--theme-title': activeColors.title,
            '--theme-border': activeColors.border,
        } as React.CSSProperties}
    >
      <style>
        {`
          @keyframes modalEnter {
            from { opacity: 0; transform: scale(0.98) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          .animate-modal-enter {
            animation: modalEnter 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>
      <div className="flex flex-col lg:flex-row">
        
        {/* Sticky Sidebar */}
        <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0 p-6 md:p-12 flex flex-col justify-center border-r border-[var(--theme-border)] bg-[var(--theme-sub-bg)] z-10 transition-colors duration-700">
          <span className="text-xs text-orange-600 uppercase tracking-widest mb-6 block transition-colors duration-500">The Journey</span>
          <h2 className="text-3xl md:text-5xl font-display text-[var(--theme-title)] mb-6 leading-tight transition-colors duration-700">Internship<br />Information.</h2>
          <p className="text-[var(--theme-text)] text-sm leading-relaxed mb-8 max-w-sm transition-colors duration-700">
            A detailed overview of my internship at the PLV IT Office. Here you will find information about the host company, supervision, schedule, and the scope of my duties and outputs.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-xs text-[var(--theme-text)] font-mono transition-colors duration-700 opacity-60">
              <span className="w-12 h-[1px] bg-[var(--theme-text)]"></span>
              <span>HOST INFO</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-[var(--theme-text)] font-mono transition-colors duration-700 opacity-60">
              <span className="w-12 h-[1px] bg-[var(--theme-text)]"></span>
              <span>DUTIES</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-[var(--theme-text)] font-mono transition-colors duration-700 opacity-60">
              <span className="w-12 h-[1px] bg-[var(--theme-text)]"></span>
              <span>OUTPUTS</span>
            </div>
          </div>
        </div>

        {/* Scrollable Projects Content */}
        <div className="lg:w-2/3 bg-[var(--theme-main-bg)] transition-colors duration-700">
          {projects.map((project, index) => (
            <div 
                key={project.id} 
                data-index={index}
                ref={(el) => { if (el) projectRefs.current.set(project.id, el); }}
                className="group relative min-h-screen flex items-center p-6 md:p-16 border-b border-[var(--theme-border)] hover:bg-[var(--theme-sub-bg)] transition-colors duration-500"
            >
              <div className="w-full">
                <div className="flex justify-between items-baseline mb-6">
                  <h3 className="text-3xl md:text-5xl font-display text-[var(--theme-title)] group-hover:opacity-80 transition-colors">{project.id}. {project.name}</h3>
                  <span className="text-xs font-mono text-[var(--theme-text)] opacity-60">{project.location}</span>
                </div>
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone-200 mb-8 grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out cursor-pointer" onClick={() => setSelectedProject(project)}>
                  <img 
                    src={project.image} 
                    className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000" 
                    alt={project.name} 
                  />
                  <div className="reveal-info absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent opacity-0 translate-y-4 transition-all duration-500">
                    <div className="flex justify-between items-end">
                      <p className="text-stone-900 text-xs tracking-widest uppercase font-semibold">{project.type}</p>
                      <p className="text-stone-700 font-mono text-xs">{project.valuation}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-end border-t border-[var(--theme-border)] pt-6">
                  <p className="text-[var(--theme-text)] text-sm max-w-md">{project.description}</p>
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-10 h-10 rounded-full border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-title)] hover:bg-[var(--theme-title)] hover:text-[var(--theme-sub-bg)] transition-all hover:scale-110 active:scale-95"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
          <div 
            className="absolute inset-0 bg-stone-200/90 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-6xl h-full md:h-[90vh] bg-stone-50 border-x md:border border-stone-200 overflow-hidden flex flex-col shadow-2xl animate-modal-enter transition-colors duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/50 backdrop-blur text-stone-900 flex items-center justify-center hover:bg-stone-900 hover:text-white transition-all border border-stone-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content Container - Scrollable */}
            <div className="overflow-y-auto h-full custom-scrollbar">
              {/* Hero Image */}
              <div className="w-full h-[40vh] md:h-[50vh] relative">
                <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
                  <h2 className="text-4xl md:text-7xl font-display text-stone-900 mb-2 tracking-tight">{selectedProject.name}</h2>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-stone-600 text-xs md:text-sm">{selectedProject.location}</span>
                    <span className="w-1 h-1 bg-orange-600 rounded-full"></span>
                    <span className="font-mono text-orange-600 text-xs md:text-sm uppercase tracking-wider">Info</span>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
                  {/* Left Column: Description & Gallery */}
                  <div className="lg:col-span-2 space-y-12">
                    <div className="space-y-6">
                      <h3 className="text-xl font-display text-stone-900">Detailed Information</h3>
                      <p className="text-stone-600 leading-loose text-sm md:text-base font-light">
                        {selectedProject.details}
                      </p>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-xl font-display text-stone-900">Visual Context</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedProject.gallery.map((img, idx) => (
                          <div key={idx} className="aspect-[4/3] bg-stone-200 overflow-hidden group/img">
                            <img src={img} className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-700 scale-125 group-hover/img:scale-100" alt={`${selectedProject.name} Detail ${idx + 1}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Specs & Features */}
                  <div className="space-y-8">
                    <div className="bg-stone-100 border border-stone-200 p-8 space-y-6">
                       <div>
                          <span className="text-xs text-stone-500 uppercase tracking-widest block mb-1">Category</span>
                          <span className="text-stone-800 text-lg font-display">{selectedProject.type}</span>
                       </div>
                       <div>
                          <span className="text-xs text-stone-500 uppercase tracking-widest block mb-1">Key Detail</span>
                          <span className="text-stone-800 text-lg font-mono">{selectedProject.valuation}</span>
                       </div>
                       <div>
                          <span className="text-xs text-stone-500 uppercase tracking-widest block mb-1">Status</span>
                          <span className="text-stone-800 text-lg font-mono">Completed</span>
                       </div>
                    </div>

                    <div>
                      <span className="text-orange-600 text-xs uppercase tracking-widest mb-6 block">Highlights</span>
                      <ul className="space-y-4">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-sm text-stone-700">
                            <span className="w-1.5 h-1.5 bg-stone-400 rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;