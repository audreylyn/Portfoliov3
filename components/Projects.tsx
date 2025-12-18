import React, { useRef, useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowLeft, ArrowRight, X, CheckCircle2, Layers, Code2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "MCiSmartSpace",
    category: "Full Stack Development",
    description: "Meycauayan College's automated room management and equipment tracking system with multi-role support.",
    fullDescription: "MCiSmartSpace is a comprehensive room management and equipment tracking system developed for Meycauayan College. It streamlines the process of reserving academic spaces and tracking institutional assets. The system features role-based access for Students, Teachers, Department Admins, and the Registrar, ensuring secure and efficient data management across the institution.",
    features: [
      "Multi-role Authentication (Student, Teacher, Admin, Registrar)",
      "Automated Room Reservation & Approval Workflow",
      "Equipment Inventory & Maintenance Tracking",
      "QR Code Integration for Equipment Reporting",
      "Comprehensive Reporting & Analytics Engine"
    ],
    tech: ["PHP", "MySQL", "JavaScript", "jQuery", "Bootstrap"],
    github: "https://github.com/audreylyn/mcmod41",
    live: "https://app.mcismartspace.com/"
  },
  {
    id: 2,
    title: "WebGen AI",
    category: "AI & Web Generation",
    description: "A powerful React-based website generator with AI-assisted content creation using Google Gemini.",
    fullDescription: "WebGen AI (LikhaSiteWorks) is an innovative platform that allows users to generate complete, responsive websites in minutes. By leveraging the Google Gemini API, it automatically creates compelling copy, selects appropriate themes, and configures essential sections based on simple user prompts. It includes a robust admin dashboard for managing multiple generated sites.",
    features: [
      "AI-Powered Content Generation (Google Gemini)",
      "Dynamic Theme & Color Palette Generation",
      "Component-Based Website Builder UI",
      "Integrated Contact Forms & Chat Support",
      "Supabase Backend for Data & Storage"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Google Gemini API"],
    github: "https://github.com/audreylyn/webgen",
    live: "https://likhasiteworks.dev"
  },
  {
    id: 3,
    title: "MC RMIS",
    category: "Web Application",
    description: "An event-driven Room Management Information System designed to streamline academic space requisitions.",
    fullDescription: "The Room Management Information System (RMIS) is an event-driven web application developed to modernize the room requisition process at Meycauayan College. Built with an MVC architecture, it provides a seamless interface for students to submit requests and for administrators to approve and monitor them through interactive dashboards and data visualizations.",
    features: [
      "MVC Architectural Pattern Implementation",
      "Interactive Admin Dashboard with Chart.js",
      "Real-time Form Validation & Feedback",
      "Responsive Design for All Devices",
      "Advanced Data Filtering & Pagination"
    ],
    tech: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/audreylyn/rmis",
    live: "http://rmis.ct.ws/"
  },
  {
    id: 4,
    title: "NightFit™",
    category: "E-commerce Landing Page",
    description: "A premium, science-backed landing page for dietary supplements with dark mode and Messenger integration.",
    fullDescription: "NightFit™ is a high-conversion landing page designed for a health supplement brand. It features a futuristic dark-neon aesthetic, interactive testimonial sliders, and a custom order modal integrated with Facebook Messenger. The project emphasizes performance and user experience, utilizing Vite for lightning-fast load times and a mobile-first responsive design.",
    features: [
      "Futuristic Dark/Light Mode with Neon Accents",
      "Interactive Testimonials & Product Sliders",
      "Facebook Messenger Order Integration",
      "Dynamic Pricing & Quantity Selection Modal",
      "SEO Optimized with High Performance Scores"
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Lucide React"],
    github: "https://github.com/audreylyn/nightfit",
    live: "https://nightfit.likhasiteworks.studio/"
  },
  {
    id: 5,
    title: "Likha Site Works",
    category: "Agency Portfolio",
    description: "A professional agency website featuring interactive SVG animations and a multi-step quote system.",
    fullDescription: "Likha Site Works is a comprehensive agency portfolio that showcases web design and development services. It features sophisticated SVG animations powered by SnapSVG, a multi-step project inquiry system, and a dynamic project gallery. The site is built with a focus on semantic code and accessibility, providing a premium experience for potential clients.",
    features: [
      "Interactive SVG Animations (SnapSVG)",
      "Multi-step Project Inquiry & Quote Form",
      "Dynamic Project Showcase with Filtering",
      "Responsive & Accessible UI/UX Design",
      "Performance-Optimized Component Architecture"
    ],
    tech: ["React", "TypeScript", "Vite", "SnapSVG", "Tailwind CSS"],
    github: "https://github.com/audreylyn/likhasiteworksv1",
    live: "https://likhasiteworks.studio/"
  },
  {
    id: 6,
    title: "LikhaQR",
    category: "SaaS Platform",
    description: "A next-gen dynamic QR platform featuring AR magic, VR tours, and smart tracking analytics.",
    fullDescription: "LikhaQR is an advanced SaaS platform that redefines QR codes by integrating Augmented Reality (AR) and Virtual Reality (VR). Users can create dynamic QR codes that overlay videos on physical targets or launch 360° VR tours. The platform includes a full-featured QR Studio for custom designs and a robust analytics dashboard for tracking scans and engagement.",
    features: [
      "AR Magic: Video & 3D Object Overlays",
      "VR Tours: Immersive 360° Photo Viewer",
      "Dynamic QR Redirects with Smart Tracking",
      "Custom QR Studio (Colors, Logos, Eye Styles)",
      "Supabase Backend with Real-time Analytics"
    ],
    tech: ["React", "TypeScript", "Supabase", "A-Frame", "MindAR.js"],
    github: "https://github.com/audreylyn/LikhaQR",
    live: "https://likha-qr.vercel.app/"
  },
  {
    id: 7,
    title: "WebSys Portfolio",
    category: "Web Development",
    description: "A comprehensive collection of web systems projects and academic assignments.",
    fullDescription: "This portfolio showcases a series of web development projects created for the Web Systems course. It includes various implementations of front-end and back-end technologies, demonstrating proficiency in building functional and responsive web applications.",
    features: [
      "Responsive Design",
      "Interactive UI Components",
      "Form Validation",
      "Database Integration",
      "Academic Project Showcase"
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/audreylyn/websys_portfolio"
  },
  {
    id: 8,
    title: "ZenLeaf",
    category: "E-commerce / Wellness",
    description: "A serene and minimalist landing page for a wellness brand focusing on natural products.",
    fullDescription: "ZenLeaf is a conceptual wellness platform designed with a focus on tranquility and natural aesthetics. It features a clean, minimalist interface that highlights product benefits and brand philosophy, providing a seamless user experience for health-conscious consumers.",
    features: [
      "Minimalist UI/UX",
      "Product Showcase",
      "Responsive Layout",
      "Smooth Animations",
      "Brand Storytelling"
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/audreylyn/zenleaf"
  },
  {
    id: 9,
    title: "Space Travel",
    category: "Interactive Web Experience",
    description: "An immersive multi-page website exploring the wonders of space travel and planetary destinations.",
    fullDescription: "Space Travel is an interactive web application that takes users on a journey through the solar system. It features detailed information about planets, crew members, and space technology, all presented through a modern and immersive interface designed to inspire curiosity about the cosmos.",
    features: [
      "Multi-page Navigation",
      "Interactive Planetary Data",
      "Immersive Visuals",
      "Responsive Design",
      "Dynamic Content Loading"
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/audreylyn/space-travel"
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
    <section id="projects" className="py-24 bg-stone-100 border-b border-stone-200 transition-colors duration-500 overflow-hidden relative">
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
            <span className="text-xs text-orange-600 uppercase tracking-widest mb-2 block">Selected Works</span>
            <h2 className="text-3xl md:text-5xl font-display text-stone-900">
              Technical <span className="text-stone-400">Projects.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-4">
            <p className="max-w-md text-sm text-stone-600 leading-relaxed text-right">
              Beyond my internship duties, I actively develop web applications. <br className="hidden md:block"/>Swipe to explore more.
            </p>
            {/* Navigation Buttons */}
            <div className="flex items-center gap-4">
                <a 
                    href="https://github.com/audreylyn?tab=repositories" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500 hover:text-orange-600 transition-colors mr-4"
                >
                    View All Projects <ExternalLink className="w-3 h-3" />
                </a>
                <div className="flex gap-2">
                    <button 
                        onClick={() => scroll('left')}
                        className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:bg-white transition-colors rounded-full active:scale-95 group"
                        aria-label="Previous Projects"
                    >
                        <ArrowLeft className="w-5 h-5 text-stone-600 group-hover:text-black transition-colors" />
                    </button>
                    <button 
                        onClick={() => scroll('right')}
                        className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:bg-white transition-colors rounded-full active:scale-95 group"
                        aria-label="Next Projects"
                    >
                        <ArrowRight className="w-5 h-5 text-stone-600 group-hover:text-black transition-colors" />
                    </button>
                </div>
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
              className="min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] snap-center group flex flex-col bg-stone-50 border border-stone-200 hover:border-orange-500/30 transition-all duration-300 shadow-sm cursor-pointer"
            >
              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="text-xs text-orange-600 uppercase tracking-wider font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-display text-stone-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-stone-200">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider border border-stone-200 text-stone-500 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* View More Card */}
          <div className="min-w-[85vw] md:min-w-[400px] lg:min-w-[450px] snap-center group flex flex-col bg-stone-200/50 border border-dashed border-stone-300 hover:border-orange-500/50 transition-all duration-300 shadow-sm">
            <a 
              href="https://github.com/audreylyn?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center flex-grow p-8 text-center group"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Github className="w-8 h-8 text-stone-400 group-hover:text-orange-600 transition-colors" />
              </div>
              <h3 className="text-xl font-display text-stone-900 mb-2">View More Projects</h3>
              <p className="text-sm text-stone-500 mb-6">Explore my full repository on GitHub</p>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-600">
                Visit GitHub <ExternalLink className="w-3 h-3" />
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-stone-200/95 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedProject(null)}
          ></div>
          
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-stone-50 border border-stone-200 shadow-2xl overflow-hidden flex flex-col animate-modal-slide-up rounded-2xl">
            
            {/* Content */}
            <div className="w-full flex flex-col overflow-y-auto custom-scrollbar bg-stone-50">
                
                {/* Header Actions */}
                <div className="flex justify-between items-center p-6 md:p-10 border-b border-stone-200 sticky top-0 bg-stone-50/95 backdrop-blur z-20">
                    <div>
                        <span className="text-[10px] text-orange-600 uppercase tracking-widest mb-1 block">{selectedProject.category}</span>
                        <h2 className="text-2xl md:text-3xl font-display text-stone-900">{selectedProject.title}</h2>
                    </div>
                    <button 
                        onClick={() => setSelectedProject(null)}
                        className="p-2 bg-stone-100 rounded-full text-stone-500 hover:text-stone-900 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6 md:p-10 space-y-8 md:space-y-10">
                    
                    {/* Description Section */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Layers className="w-4 h-4 text-orange-600" />
                            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">About the Project</span>
                        </div>
                        <p className="text-stone-600 leading-relaxed text-sm md:text-base">
                            {selectedProject.fullDescription}
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Key Features</span>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {selectedProject.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-stone-600 p-3 rounded-lg bg-stone-100 border border-stone-200">
                                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Code2 className="w-4 h-4 text-blue-600" />
                            <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Technologies Used</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.map((tech, idx) => (
                                <span key={idx} className="px-3 py-1.5 text-xs font-mono text-stone-600 border border-stone-200 rounded bg-stone-100">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-auto p-6 md:p-10 border-t border-stone-200 bg-stone-100/50">
                    <div className="flex gap-4">
                        {selectedProject.github && (
                            <a 
                                href={selectedProject.github}
                                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-stone-900 text-white rounded-lg font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
                            >
                                <Github className="w-4 h-4" /> View Code
                            </a>
                        )}
                        {selectedProject.live ? (
                            <a 
                                href={selectedProject.live}
                                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white text-stone-900 border border-stone-200 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-stone-50 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" /> Live Demo
                            </a>
                        ) : (
                             <button 
                                disabled
                                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-stone-200 text-stone-400 border border-stone-200 rounded-lg font-bold text-sm uppercase tracking-wider cursor-not-allowed"
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