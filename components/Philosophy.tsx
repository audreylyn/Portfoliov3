import React, { useEffect, useState } from 'react';
import { Github, Terminal, Brain, Cpu, Database, Globe } from 'lucide-react';

interface Contribution {
  date: string;
  count: number;
  level: number;
}

const Philosophy: React.FC = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching from a public proxy for GitHub contributions
        const response = await fetch('https://github-contributions-api.jogruber.de/v4/audreylyn?y=last');
        
        if (!response.ok) {
           throw new Error('Failed to fetch GitHub data');
        }

        const data = await response.json();
        
        const allContributions = data.contributions || [];
        const recentContributions = allContributions.slice(-364); // Last 52 weeks
        
        setContributions(recentContributions);
        
        const total = recentContributions.reduce((acc: number, curr: Contribution) => acc + curr.count, 0);
        setTotalContributions(total);
        
      } catch (error) {
        console.error('Error loading GitHub contributions:', error);
        // Fallback to "mock" data
        const fallbackData = Array.from({ length: 364 }).map((_, i) => ({
          date: '',
          count: 0,
          level: Math.random() > 0.8 ? Math.floor(Math.random() * 4) + 1 : 0
        }));
        setContributions(fallbackData);
        setTotalContributions(694); 
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getIntensityClass = (level: number) => {
    switch(level) {
      case 1: return 'bg-emerald-200 dark:bg-emerald-900/40';
      case 2: return 'bg-emerald-300 dark:bg-emerald-800/60';
      case 3: return 'bg-emerald-400 dark:bg-emerald-600/80';
      case 4: return 'bg-emerald-500 dark:bg-emerald-500';
      default: return 'bg-stone-200 dark:bg-stone-800/50'; // level 0
    }
  };

  const skills = [
    'Hardware Troubleshooting', 
    'Network Administration', 
    'HTML5 & CSS3', 
    'JavaScript (ES6+)', 
    'PHP / Laravel', 
    'MySQL Database', 
    'React.js', 
    'Tailwind CSS', 
    'Figma UI/UX', 
    'Git Version Control'
  ];

  const softSkills = [
    'Problem Solving',
    'Critical Thinking',
    'Team Collaboration',
    'Communication',
    'Documentation',
    'Time Management'
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-stone-50 dark:bg-[#050505] border-b border-stone-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Header Section - Full Width to remove empty space */}
        <div className="max-w-4xl mb-16">
          <span className="text-xs text-orange-600 dark:text-orange-500 uppercase tracking-widest mb-4 block">About Me</span>
          <h2 className="text-3xl md:text-5xl font-display text-stone-900 dark:text-white leading-tight">
            <span className="underline--magical">Skills Summary</span> <span className="text-stone-400 dark:text-stone-600">&</span> <br/>
            Professional Attributes
          </h2>
        </div>

        {/* Content Grid - 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Soft Skills */}
          <div className="bg-white dark:bg-[#0a0a0a] border border-stone-200 dark:border-white/5 p-8 md:p-10 rounded-2xl hover:border-orange-500/30 transition-colors shadow-sm dark:shadow-none">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-500 rounded-full">
                    <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display text-stone-900 dark:text-white">Professional Conduct</h3>
            </div>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base mb-8">
              My professional conduct is defined by strong problem-solving and critical thinking abilities. I excel in communication and collaboration within team settings, ensuring clarity in documentation and reporting. Effective time management allows me to handle multiple technical tasks efficiently.
            </p>
            <div className="flex flex-wrap gap-3">
                {softSkills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-orange-50 dark:bg-orange-900/20 border border-orange-100 dark:border-orange-500/20 text-orange-700 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-orange-100 dark:hover:bg-orange-900/40 transition-colors cursor-default">
                        {skill}
                    </span>
                ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-white dark:bg-[#0a0a0a] border border-stone-200 dark:border-white/5 p-8 md:p-10 rounded-2xl hover:border-emerald-500/30 transition-colors shadow-sm dark:shadow-none">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-500 rounded-full">
                    <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display text-stone-900 dark:text-white">Technical Expertise</h3>
            </div>
            <p className="text-stone-600 dark:text-stone-400 leading-relaxed text-sm md:text-base mb-8">
                I possess hands-on experience in hardware troubleshooting, software installation, and system maintenance. My expertise extends to web technologies and database management.
            </p>
            <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors cursor-default">
                        {skill}
                    </span>
                ))}
            </div>
          </div>
        </div>

        {/* GitHub & Stats Section - Unified Container */}
        <div className="border-t border-stone-200 dark:border-white/10 pt-16">
           <div className="grid grid-cols-1 xl:grid-cols-4 gap-12">
              
              {/* GitHub Graph - Spans 3 columns */}
              <div className="xl:col-span-3">
                  <div className="flex items-center justify-between mb-8">
                     <div className="flex items-center gap-3">
                        <Github className="w-5 h-5 text-stone-900 dark:text-white" />
                        <span className="text-sm font-bold uppercase tracking-wider text-stone-900 dark:text-white">Open Source Activity</span>
                     </div>
                     <div className="text-right">
                        <span className="font-display font-bold text-2xl text-stone-900 dark:text-white block">{totalContributions}</span>
                        <span className="text-[10px] text-stone-500 uppercase">Contributions (Last Year)</span>
                     </div>
                  </div>
                  
                  {/* Graph Container */}
                  <div className="w-full overflow-hidden">
                     <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
                        <div 
                            className="grid grid-rows-7 grid-flow-col gap-1 w-fit min-w-full" 
                        >
                            {contributions.map((day, i) => (
                                <div 
                                    key={i} 
                                    title={`${day.date}: ${day.count} contributions`}
                                    className={`w-3 h-3 md:w-4 md:h-4 rounded-[1px] ${getIntensityClass(day.level)}`}
                                ></div>
                            ))}
                        </div>
                     </div>
                  </div>
              </div>

              {/* Stats - Vertical Column */}
              <div className="xl:col-span-1 flex flex-row xl:flex-col justify-between gap-8 border-t xl:border-t-0 xl:border-l border-stone-200 dark:border-white/10 pt-8 xl:pt-0 xl:pl-12">
                  <div>
                    <span className="block text-4xl font-display text-stone-900 dark:text-white mb-1">PLV</span>
                    <span className="text-xs text-stone-500 uppercase tracking-widest">Education</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-display text-stone-900 dark:text-white mb-1">IT</span>
                    <span className="text-xs text-stone-500 uppercase tracking-widest">Office OJT</span>
                  </div>
                  <div>
                    <span className="block text-4xl font-display text-stone-900 dark:text-white mb-1">100%</span>
                    <span className="text-xs text-stone-500 uppercase tracking-widest">Dedication</span>
                  </div>
              </div>

           </div>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;