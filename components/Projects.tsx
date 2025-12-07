import React, { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowLeft, ArrowRight, X, CheckCircle2, Layers, Code2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Student Information System",
    category: "Full Stack Development",
    description: "A comprehensive portal for PLV students to view grades, schedules, and enrollment status. Built with robust role-based access control.",
    fullDescription: "Designed to streamline the academic experience, this Student Information System serves as a centralized hub for data management within PLV. It replaces manual processes with a secure, digital interface allowing real-time access to academic records, significantly reducing administrative overhead and improving data accuracy.",
    features: [
      "Role-Based Access Control (RBAC)",
      "Real-time Grade Computation",
      "Class Schedule Visualization",
      "Enrollment History Tracking",
      "Secure Student Authentication"
    ],
    tech: ["Laravel", "MySQL", "Bootstrap", "PHP"],
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1600&auto=format&fit=crop",
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "OJT Portfolio v1",
    category: "Frontend Design",
    description: "The initial iteration of my internship portfolio focusing on accessible design and dark mode implementation.",
    fullDescription: "This project represents the first major milestone in my journey as a frontend developer. It focuses on clean typography, accessibility, and providing a seamless experience across devices while showcasing my internship achievements and technical growth.",
    features: [
      "Responsive Mobile-First Design",
      "Dark/Light Mode Toggle",
      "Smooth Scroll Animations",
      "Component-Based Architecture",
      "Accessible Navigation"
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?q=80&w=1600&auto=format&fit=crop",
    github: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Inventory Management",
    category: "Database Management",
    description: "An internal tool developed to track hardware assets within the IT Office, streamlining the audit process.",
    fullDescription: "Built to address the challenges of asset tracking in a busy IT office, this application provides granular control over hardware inventory. It facilitates easy auditing, ensures accountability for all university technical assets, and generates comprehensive status reports.",
    features: [
      "Barcode/Asset Tag Support",
      "Automated Audit Reports",
      "Equipment Status Tracking",
      "User Activity Logging",
      "Check-in/Check-out System"
    ],
    tech: ["VB.NET", "MSSQL", "Crystal Reports"],
    image: "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1600&auto=format&fit=crop",
    github: "#",
    live: null
  },
  {
    id: 4,
    title: "E-Commerce Dashboard",
    category: "Web Application",
    description: "A modern admin dashboard for managing products, orders, and analytics with real-time data visualization and export capabilities.",
    fullDescription: "A high-performance dashboard designed for modern e-commerce needs. It aggregates critical business metrics into an intuitive interface, allowing administrators to make data-driven decisions instantly through interactive charts and real-time order feeds.",
    features: [
      "Interactive Data Visualization",
      "Product & Stock Management",
      "Order Processing Workflow",
      "Sales Performance Analytics",
      "Data Export (CSV/PDF)"
    ],
    tech: ["React", "Node.js", "Chart.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    github: "#",
    live: "#"
  },
  {
    id: 5,
    title: "Task Master",
    category: "Productivity Tool",
    description: "A drag-and-drop task management application inspired by Kanban boards for improved personal productivity and team collaboration.",
    fullDescription: "Inspired by Trello and Jira, Task Master simplifies project management through a visual Kanban board. It enables teams to organize tasks efficiently, tracking progress from conception to completion with a focus on usability and speed.",
    features: [
      "Drag-and-Drop Interface",
      "Customizable Columns",
      "Task Labeling & Priority",
      "Real-time State Sync",
      "Collaborative Workspaces"
    ],
    tech: ["Vue.js", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1600&auto=format&fit=crop",
    github: "#",
    live: "#"
  },
  {
    id: 6,
    title: "Weather Forecast",
    category: "API Integration",
    description: "A location-based weather app providing current conditions and 5-day forecasts using OpenWeatherMap API with dynamic background themes.",
    fullDescription: "Leveraging the OpenWeatherMap API, this application delivers precise weather data. It features a dynamic UI that adapts its color palette and imagery based on the current weather conditions of the searched location, providing an immersive user experience.",
    features: [
      "Geolocation Detection",
      "5-Day / 3-Hour Forecast",
      "Dynamic Background Themes",
      "City Search History",
      "Detailed Meteorological Data"
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "API"],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1600&auto=format&fit=crop",
    github: "#",
    live: "#"
  }
];

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 450; // Approximate card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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

  return (
    <section id="projects" className="py-24 bg-stone-100 dark:bg-[#080808] border-b border-stone-200 dark:border-white/5 transition-colors duration-500 overflow-hidden relative">
      <style>
        {`
          @keyframes modalSlideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-modal-slide-up {
            animation: modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs text-orange-600 dark:text-orange-500 uppercase tracking-widest mb-2 block">Selected Works</span>
            <h2 className="text-3xl md:text-5xl font-display text-stone-900 dark:text-white">
              Technical <span className="text-stone-400 dark:text-stone-600">Projects.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-4">
            <p className="max-w-md text-sm text-stone-600 dark:text-stone-400 leading-relaxed text-right">
              Beyond my internship duties, I actively develop web applications. <br className="hidden md:block"/>Swipe to explore more.
            </p>
            {/* Navigation Buttons */}
            <div className="flex gap-2">
                <button 
                    onClick={() => scroll('left')}
                    className="w-12 h-12 border border-stone-300 dark:border-white/10 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 transition-colors rounded-full active:scale-95 group"
                    aria-label="Previous Projects"
                >
                    <ArrowLeft className="w-5 h-5 text-stone-600 dark:text-stone-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </button>
                <button 
                    onClick={() => scroll('right')}
                    className="w-12 h-12 border border-stone-300 dark:border-white/10 flex items-center justify-center hover:bg-white dark:hover:bg-white/10 transition-colors rounded-full active:scale-95 group"
                    aria-label="Next Projects"
                >
                    <ArrowRight className="w-5 h-5 text-stone-600 dark:text-stone-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </button>
            </div>
          </div>
        </div>

        {/* Slider Container */}
        <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-12 hide-scrollbar scroll-smooth px-1"
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => setSelectedProject(project)}
              className="min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] snap-center group flex flex-col bg-stone-50 dark:bg-[#050505] border border-stone-200 dark:border-white/5 hover:border-orange-500/30 dark:hover:border-orange-500/30 transition-all duration-300 shadow-sm dark:shadow-none cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200 dark:bg-stone-900">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                  <ExternalLink className="w-4 h-4 text-stone-900 dark:text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="text-xs text-orange-600 dark:text-orange-500 uppercase tracking-wider font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display text-stone-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-stone-200 dark:border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider border border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-500 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-stone-200/95 dark:bg-[#050505]/95 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-stone-50 dark:bg-[#0c0c0c] border border-stone-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row animate-modal-slide-up rounded-2xl">
            
            {/* Close Button Mobile */}
            <button 
                onClick={() => setSelectedProject(null)}
                className="md:hidden absolute top-4 right-4 z-50 p-2 bg-white/80 dark:bg-black/50 backdrop-blur rounded-full text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
            >
                <X className="w-5 h-5" />
            </button>

            {/* Left/Top: Image & Quick Actions */}
            <div className="w-full md:w-5/12 h-64 md:h-auto relative bg-stone-200 dark:bg-[#111]">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
                
                {/* Overlay Title Mobile */}
                <div className="absolute bottom-0 left-0 p-6 md:hidden text-white">
                    <span className="text-xs text-orange-400 uppercase tracking-widest mb-1 block">{selectedProject.category}</span>
                    <h2 className="text-2xl font-display">{selectedProject.title}</h2>
                </div>
            </div>

            {/* Right/Bottom: Content */}
            <div className="w-full md:w-7/12 flex flex-col overflow-y-auto custom-scrollbar bg-stone-50 dark:bg-[#0c0c0c]">
                
                {/* Header Actions Desktop */}
                <div className="hidden md:flex justify-between items-center p-8 md:p-10 border-b border-stone-200 dark:border-white/5 sticky top-0 bg-stone-50/95 dark:bg-[#0c0c0c]/95 backdrop-blur z-20">
                    <h2 className="text-3xl font-display text-stone-900 dark:text-white">{selectedProject.title}</h2>
                    <button 
                        onClick={() => setSelectedProject(null)}
                        className="p-2 bg-stone-100 dark:bg-stone-800 rounded-full text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 md:p-10 space-y-8 md:space-y-10">
                    
                    {/* Description Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Layers className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">About the Project</span>
                        </div>
                        <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-sm md:text-base">
                            {selectedProject.fullDescription}
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
                            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Key Features</span>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {selectedProject.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-400 p-3 rounded-lg bg-stone-100 dark:bg-stone-900/40 border border-stone-200 dark:border-white/5">
                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-500" />
                            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Technologies Used</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1.5 text-xs font-mono text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-white/10 rounded bg-stone-100 dark:bg-stone-900/50">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-auto p-6 md:p-10 border-t border-stone-200 dark:border-white/5 bg-stone-100/50 dark:bg-stone-900/20">
                    <div className="flex gap-4">
                        {selectedProject.github && (
                            <a 
                                href={selectedProject.github}
                                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-stone-900 dark:bg-white text-white dark:text-black rounded-lg font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                            >
                                <Github className="w-4 h-4" /> View Code
                            </a>
                        )}
                        {selectedProject.live ? (
                            <a 
                                href={selectedProject.live}
                                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white dark:bg-stone-800 text-stone-900 dark:text-white border border-stone-200 dark:border-white/10 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-stone-50 dark:hover:bg-stone-700 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" /> Live Demo
                            </a>
                        ) : (
                             <button 
                                disabled
                                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-stone-200 dark:bg-stone-900 text-stone-400 dark:text-stone-600 border border-stone-200 dark:border-white/5 rounded-lg font-bold text-sm uppercase tracking-wider cursor-not-allowed"
                            >
                                <ExternalLink className="w-4 h-4" /> Private / Internal
                            </button>
                        )}
                    </div>
                </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;