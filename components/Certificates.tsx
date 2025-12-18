import React, { useRef, useState, useEffect } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2, ArrowLeft, ArrowRight, X, Download, Share2 } from 'lucide-react';

const certificates = [
  {
    id: 1,
    title: "Certificate of Completion - OJT",
    issuer: "Pamantasan ng Lungsod ng Valenzuela - IT Office",
    date: "2025",
    type: "Internship",
    status: "completed",
    banner: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    image: "images/certificates/completion.jpg",
    link: "images/certificates/completion.pdf",
    description: "Successfully completed 486 hours of intensive internship training, specializing in hardware diagnostics, network administration, and technical support."
  },
  {
    id: 2,
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Angela Yu (Udemy)",
    date: "2023",
    type: "Course",
    status: "completed",
    banner: "https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-4b83fb7e-97a5-43a3-88f3-feaea95c77ea.jpg",
    link: "https://www.udemy.com/certificate/UC-4b83fb7e-97a5-43a3-88f3-feaea95c77ea/",
    description: "Comprehensive bootcamp covering full-stack development technologies including HTML5, CSS3, JS, React, Postgres and many more."
  },
  {
    id: 3,
    title: "The Complete JavaScript Course 2025: From Zero to Expert!",
    issuer: "Jonas Schmedtmann (Udemy)",
    date: "2025",
    type: "Course",
    status: "completed",
    banner: "https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg",
    image: "https://udemy-certificate.s3.amazonaws.com/image/UC-7555fff7-d481-4893-8ccd-79fa3ab3e579.jpg",
    link: "https://www.udemy.com/certificate/UC-7555fff7-d481-4893-8ccd-79fa3ab3e579/",
    description: "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!"
  },
  {
    id: 4,
    title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    issuer: "Jonas Schmedtmann (Udemy)",
    date: "Ongoing",
    type: "Course",
    status: "ongoing",
    banner: "https://img-c.udemycdn.com/course/240x135/4471614_361e_8.jpg",
    image: "https://img-c.udemycdn.com/course/240x135/4471614_361e_8.jpg",
    link: "#",
    description: "Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns"
  },
  {
    id: 5,
    title: "n8n - AI Agents, AI Automations & AI Voice Agents (No-code!)",
    issuer: "Krystian Wojtarowicz and AdaptifyAI OU (Udemy)",
    date: "Ongoing",
    type: "Course",
    status: "ongoing",
    banner: "https://img-c.udemycdn.com/course/240x135/6563609_8f41_2.jpg",
    image: "https://img-c.udemycdn.com/course/240x135/6563609_8f41_2.jpg",
    link: "#",
    description: "90+ Ready-to-Use n8n Templates to Build AI Agents & Automate Workflows with OpenAI, Retell, MCP, RAG | Launch AI Agency"
  }
];

const Certificates: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400; // Approximate item width
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  return (
    <section className="py-24 bg-stone-50 border-b border-stone-200 transition-colors duration-500 overflow-hidden relative">
      <style>
        {`
          @keyframes modalFadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-modal-fade-in {
            animation: modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
        `}
      </style>

      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
        
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div>
              <span className="text-xs text-orange-600 uppercase tracking-widest mb-4 block">Credentials</span>
              <h2 className="text-3xl md:text-5xl font-display text-stone-900 mb-4">
                <span className="underline--magical">Certifications</span> <span className="text-stone-400">& Awards</span>
              </h2>
               <p className="max-w-xl text-stone-600 leading-relaxed text-sm md:text-base">
                A timeline of my professional growth and recognized achievements.
              </p>
           </div>
           
           {/* Navigation Buttons */}
           <div className="flex gap-2">
                <button 
                    onClick={() => scroll('left')}
                    className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:bg-white transition-colors rounded-full active:scale-95 group"
                    aria-label="Previous Certificate"
                >
                    <ArrowLeft className="w-5 h-5 text-stone-600 group-hover:text-black transition-colors" />
                </button>
                <button 
                    onClick={() => scroll('right')}
                    className="w-12 h-12 border border-stone-300 flex items-center justify-center hover:bg-white transition-colors rounded-full active:scale-95 group"
                    aria-label="Next Certificate"
                >
                    <ArrowRight className="w-5 h-5 text-stone-600 group-hover:text-black transition-colors" />
                </button>
           </div>
        </div>

        {/* Horizontal Timeline Scroll Container */}
        <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-0 pb-8 hide-scrollbar"
        >
            {certificates.map((cert, index) => (
                <div key={cert.id} className="min-w-[320px] md:min-w-[450px] snap-start flex flex-col group pr-8 md:pr-12">
                    
                    {/* Top: Date */}
                    <div className="mb-6 pl-2">
                        <span className="font-display text-5xl md:text-6xl text-stone-200 font-bold group-hover:text-orange-200 transition-colors duration-500 select-none block">
                            {cert.date}
                        </span>
                    </div>

                    {/* Middle: Timeline Graphic */}
                    <div className="flex items-center w-full mb-8 relative">
                        {/* Dot */}
                        <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg shadow-orange-500/20 z-10 shrink-0"></div>
                        
                        {/* Connecting Line */}
                        <div className="h-px bg-stone-200 w-full"></div>
                    </div>

                    {/* Bottom: Content Card */}
                    <div 
                        className="flex-grow bg-white border border-stone-200 p-6 md:p-8 rounded-2xl hover:border-orange-500/30 transition-all duration-300 shadow-sm flex flex-col h-full cursor-pointer hover:-translate-y-1"
                        onClick={() => setSelectedCert(cert)}
                    >
                        {/* Type Badge */}
                        <div className="mb-6">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm inline-block
                                ${cert.type === 'Internship' 
                                ? 'bg-orange-50 text-orange-600 border-orange-100' 
                                : 'bg-stone-50 text-stone-600 border-stone-200'
                                }`}
                            >
                                {cert.type}
                            </span>
                        </div>

                        {/* Image & Title Header */}
                        <div className="flex items-start gap-4 mb-4">
                             <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-stone-100 border border-stone-100">
                                <img src={cert.banner} alt={cert.issuer} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                             </div>
                             <div>
                                <h3 className="font-display text-lg text-stone-900 leading-tight mb-1 group-hover:text-orange-600 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-xs font-bold text-stone-500 uppercase tracking-wide">{cert.issuer}</p>
                             </div>
                        </div>

                        <p className="text-sm text-stone-600 leading-relaxed mb-6 flex-grow">
                            {cert.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-auto">
                            <div className={`flex items-center gap-2 text-xs font-medium ${cert.status === 'ongoing' ? 'text-orange-600' : 'text-emerald-600'}`}>
                                {cert.status === 'ongoing' ? (
                                    <>
                                        <Calendar className="w-3 h-3" />
                                        <span>Ongoing</span>
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle2 className="w-3 h-3" />
                                        <span>Verified</span>
                                    </>
                                )}
                            </div>
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedCert(cert);
                                }} 
                                className="flex items-center gap-2 text-xs font-medium text-stone-400 hover:text-stone-900 transition-colors group/link"
                            >
                                <span>{cert.status === 'ongoing' ? 'View Details' : 'View Certificate'}</span>
                                <ExternalLink className="w-3 h-3 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Modal Overlay */}
        {selectedCert && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                <div 
                    className="absolute inset-0 bg-stone-200/90 backdrop-blur-sm transition-opacity" 
                    onClick={() => setSelectedCert(null)}
                ></div>
                
                <div className="relative w-full max-w-5xl bg-stone-50 border border-stone-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row animate-modal-fade-in max-h-[90vh]">
                    
                    {/* Close Button */}
                    <button 
                        onClick={() => setSelectedCert(null)}
                        className="absolute top-4 right-4 z-20 p-2 bg-white/80 backdrop-blur rounded-full text-stone-500 hover:text-stone-900 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Left Column: Image Area */}
                    <div className="w-full md:w-3/5 bg-stone-200 relative flex items-center justify-center p-6 md:p-16 overflow-hidden group min-h-[200px]">
                        {/* Background blurred image for ambiance */}
                        <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
                            <img src={selectedCert.banner} className="w-full h-full object-cover blur-3xl scale-150" alt="" />
                        </div>
                        
                        {/* The "Paper" Certificate */}
                        <div className="relative w-full aspect-[4/3] bg-white shadow-2xl rounded-sm overflow-hidden border-[8px] md:border-[12px] border-white transform transition-transform duration-500 group-hover:scale-[1.02]">
                            <img src={selectedCert.image} className={`w-full h-full object-cover ${selectedCert.status === 'ongoing' ? 'opacity-40 grayscale' : ''}`} alt={selectedCert.title} />
                            
                            {selectedCert.status === 'ongoing' && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                    <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mb-4 shadow-inner">
                                        <Calendar className="w-8 h-8 text-stone-400" />
                                    </div>
                                    <p className="text-stone-900 font-display text-xl font-bold mb-1">Ongoing Course</p>
                                    <p className="text-stone-500 text-sm">Certificate will be available upon completion.</p>
                                </div>
                            )}

                            {/* Optional overlay badge */}
                            <div className="absolute top-0 right-0 p-2 md:p-4">
                                <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg ${selectedCert.status === 'ongoing' ? 'bg-stone-400' : 'bg-orange-600'} text-white`}>
                                    <Award className="w-4 h-4 md:w-6 md:h-6" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Information */}
                    <div className="w-full md:w-2/5 p-6 md:p-12 flex flex-col overflow-y-auto">
                        <div className="mb-auto">
                            <div className="flex items-center gap-2 mb-4">
                                <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border ${
                                    selectedCert.type === 'Internship' 
                                    ? 'bg-orange-50 text-orange-600 border-orange-100' 
                                    : 'bg-stone-100 text-stone-600 border-stone-200'
                                }`}>
                                    {selectedCert.type}
                                </span>
                                <div className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider ${selectedCert.status === 'ongoing' ? 'text-orange-600' : 'text-emerald-600'}`}>
                                    {selectedCert.status === 'ongoing' ? (
                                        <>
                                            <Calendar className="w-3 h-3" />
                                            <span>Ongoing</span>
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle2 className="w-3 h-3" />
                                            <span>Verified</span>
                                        </>
                                    )}
                                </div>
                            </div>

                            <h2 className="font-display text-2xl md:text-3xl text-stone-900 leading-tight mb-2">
                                {selectedCert.title}
                            </h2>
                            <p className="font-serif italic text-stone-500 text-lg mb-8">
                                Issued by {selectedCert.issuer}
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <span className="text-xs text-stone-400 uppercase tracking-widest block mb-2">Description</span>
                                    <p className="text-sm text-stone-600 leading-relaxed">
                                        {selectedCert.description}
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-stone-200">
                                    <div>
                                        <span className="text-xs text-stone-400 uppercase tracking-widest block mb-1">Date</span>
                                        <span className="text-stone-900 font-medium">{selectedCert.date}</span>
                                    </div>
                                    <div>
                                        <span className="text-xs text-stone-400 uppercase tracking-widest block mb-1">Credential ID</span>
                                        <span className="text-stone-900 font-mono text-xs">UC-{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-3">
                            {selectedCert.status !== 'ongoing' && (
                                <a 
                                    href={selectedCert.link !== "#" ? selectedCert.link : selectedCert.image}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-4 bg-stone-900 text-white rounded-lg font-bold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                                >
                                    <Download className="w-4 h-4" /> Download Certificate
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;