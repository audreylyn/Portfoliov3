import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center pt-36 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 border-b border-double border-stone-200 dark:border-white/5 overflow-hidden transition-colors duration-500">
      {/* Background Ambient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-300/30 dark:bg-stone-800/10 rounded-full blur-[120px] pointer-events-none transition-colors duration-500"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 dark:bg-orange-900/5 rounded-full blur-[150px] pointer-events-none transition-colors duration-500"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Column */}
        <div className="space-y-12 order-2 lg:order-1">
            <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-orange-500/30 bg-orange-500/5 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400 font-display">
                    <span className="w-1.5 h-1.5 rotate-45 bg-orange-500"></span> BSIT Student
                    <span className="w-1.5 h-1.5 rotate-45 bg-orange-500"></span>
                </div>
                
                {/* Heading */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-stone-900 dark:text-white leading-[0.95] tracking-tight">
                    Audreylyn <br />
                    <i className="font-serif font-light text-orange-600 dark:text-orange-500">Moraña</i> <span className="text-4xl md:text-6xl align-middle text-stone-400">&</span><br />
                    Portfolio
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 max-w-lg leading-relaxed font-serif italic border-l-2 border-orange-500 pl-6">
                    "Aspiring Web Developer specializing in UI/UX & Modern Technologies from Pamantasan ng Lungsod ng Valenzuela."
                </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
                <a href="#projects" className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-600 dark:hover:bg-orange-500 text-white px-10 py-4 font-bold tracking-widest uppercase text-xs transition-all shadow-[4px_4px_0px_0px_#1c1917] dark:shadow-[4px_4px_0px_0px_#ffffff20] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1c1917] dark:hover:shadow-[2px_2px_0px_0px_#ffffff20] border border-stone-900 dark:border-white text-center">
                    View Catalogue
                </a>
                <a href="#about" className="bg-transparent hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-900 dark:text-white border border-stone-900 dark:border-white px-10 py-4 font-bold tracking-widest uppercase text-xs transition-all flex items-center justify-center gap-2">
                    About Me
                </a>
            </div>

            {/* Stats */}
            <div className="pt-8 flex gap-8 border-t border-stone-200 dark:border-white/10">
                <div className="text-center">
                    <span className="block text-3xl font-display text-orange-600 dark:text-orange-500 font-bold">3rd</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-500">Year Student</span>
                </div>
                <div className="w-px bg-stone-200 dark:bg-white/10 h-10 self-center"></div>
                <div className="text-center">
                    <span className="block text-3xl font-display text-orange-600 dark:text-orange-500 font-bold">100%</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-500">Dedication</span>
                </div>
                <div className="w-px bg-stone-200 dark:bg-white/10 h-10 self-center"></div>
                <div className="text-center">
                    <span className="block text-3xl font-display text-orange-600 dark:text-orange-500 font-bold">WEB</span>
                    <span className="text-[10px] uppercase tracking-widest text-stone-500">Developer</span>
                </div>
            </div>
        </div>

        {/* Image Column */}
        <div className="relative group p-6 flex justify-center order-1 lg:order-2">
            {/* Vintage Photo Corners Style Frame */}
            <div className="absolute inset-0 border-4 border-double border-stone-900/10 dark:border-white/10 rotate-1 rounded-sm"></div>
            <div className="absolute inset-0 border border-stone-900/20 dark:border-white/20 -rotate-1 bg-stone-100 dark:bg-stone-900 z-0 rounded-sm"></div>
            
            <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
                alt="Audreylyn Moraña" 
                className="relative z-10 w-full max-w-md h-[500px] md:h-[600px] object-cover grayscale contrast-125 border border-stone-900/10 dark:border-white/10 shadow-xl" 
            />
            
            {/* Animated Flower Badge */}
            <div className="absolute bottom-12 -left-2 md:-left-12 z-20">
                <div className="relative w-40 h-40 md:w-48 md:h-48 cursor-pointer group/badge">
                    <style>
                        {`
                            @keyframes rotateReverse {
                                to { transform: rotate(-360deg); }
                            }
                            @keyframes rotate {
                                to { transform: rotate(360deg); }
                            }
                            .badge-text {
                                animation: rotateReverse 20s linear infinite;
                                transform-origin: center;
                            }
                            .badge-cloud {
                                animation: rotate 30s linear infinite;
                                transform-origin: center;
                            }
                            .badge-face {
                                transition: transform 0.3s cubic-bezier(0.32, 0, 0.67, 0);
                                transform-origin: center;
                            }
                            .group\/badge:hover .badge-face {
                                transform: scale(1.2);
                            }
                            .group\/badge:hover .badge-text {
                                animation-play-state: paused;
                            }
                        `}
                    </style>
                    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl" aria-labelledby="badge-title">
                        <title id="badge-title">Genuine Quality Badge</title>
                        
                        <defs>
                            <path id="link-circle-alt" d="M 35, 100 a 65,65 0 1,1 130,0 a 65,65 0 1,1 -130,0" />
                        </defs>

                        {/* Cloud/Flower Shape */}
                        <path 
                            className="badge-cloud fill-white dark:fill-stone-900 stroke-stone-200 dark:stroke-stone-700"
                            strokeWidth="1"
                            d="M88.964,9.111C89.997,4.612 94.586,0.999 100,0.999C105.413,0.999 110.002,4.612 111.036,9.111C113.115,4.991 118.435,2.581 123.692,3.878C128.948,5.172 132.54,9.78 132.466,14.393C135.472,10.891 141.214,9.824 146.008,12.341C150.801,14.855 153.185,20.189 152.01,24.651C155.766,21.968 161.597,22.307 165.648,25.899C169.7,29.488 170.741,35.235 168.53,39.286C172.818,37.583 178.4,39.307 181.474,43.761C184.551,48.217 184.183,54.047 181.068,57.451C185.641,56.823 190.646,59.834 192.567,64.894C194.486,69.955 192.735,75.529 188.895,78.09C193.486,78.573 197.626,82.693 198.278,88.067C198.93,93.441 195.898,98.433 191.556,100C195.898,101.567 198.93,106.56 198.278,111.934C197.626,117.307 193.486,121.427 188.895,121.91C192.735,124.472 194.486,130.045 192.567,135.106C190.646,140.167 185.641,143.177 181.068,142.549C184.183,145.954 184.551,151.783 181.474,156.239C178.4,160.693 172.818,162.418 168.53,160.712C170.741,164.766 169.7,170.512 165.648,174.102C161.597,177.691 155.766,178.032 152.01,175.349C153.185,179.812 150.801,185.145 146.008,187.66C141.214,190.176 135.472,189.109 132.466,185.607C132.54,190.221 128.948,194.828 123.692,196.123C118.435,197.419 113.115,195.009 111.036,190.889C110.002,195.388 105.413,199.001 100,199.001C94.586,199.001 89.997,195.388 88.964,190.889C86.884,195.009 81.564,197.419 76.307,196.123C71.051,194.828 67.461,190.221 67.533,185.607C64.529,189.109 58.785,190.176 53.992,187.66C49.2,185.145 46.815,179.812 47.989,175.349C44.233,178.032 38.402,177.691 34.351,174.102C30.299,170.512 29.259,164.766 31.469,160.712C27.181,162.418 21.599,160.693 18.525,156.239C15.449,151.783 15.816,145.954 18.931,142.549C14.359,143.177 9.353,140.167 7.434,135.106C5.513,130.045 7.264,124.472 11.104,121.91C6.514,121.427 2.374,117.307 1.722,111.934C1.07,106.56 4.103,101.567 8.443,100C4.103,98.433 1.07,93.441 1.722,88.067C2.374,82.693 6.514,78.573 11.104,78.09C7.264,75.529 5.513,69.955 7.434,64.894C9.353,59.834 14.359,56.823 18.931,57.451C15.816,54.047 15.449,48.217 18.525,43.761C21.599,39.307 27.181,37.583 31.469,39.286C29.259,35.235 30.299,29.488 34.351,25.899C38.402,22.307 44.233,21.968 47.989,24.651C46.815,20.189 49.2,14.855 53.992,12.341C58.785,9.824 64.529,10.891 67.533,14.393C67.461,9.78 71.051,5.172 76.307,3.878C81.564,2.581 86.884,4.991 88.964,9.111Z" 
                        />

                        {/* Face */}
                        <g className="badge-face stroke-stone-900 dark:stroke-white" strokeWidth="2" fill="none">
                            <path d='M 95 102 Q 100 107 105 102' strokeLinecap="round" />
                            <ellipse cx='90' cy='100' rx='2' ry='2' className="fill-stone-900 dark:fill-white stroke-none" />
                            <ellipse cx='110' cy='100' rx='2' ry='2' className="fill-stone-900 dark:fill-white stroke-none" />
                            <ellipse cx='100' cy='100' rx='35' ry='35' className="stroke-stone-900 dark:stroke-white" />
                        </g>

                        {/* Text */}
                        <text className="badge-text text-[11px] font-bold uppercase tracking-[0.1em] fill-stone-900 dark:fill-white">
                            <textPath href="#link-circle-alt" startOffset="50%" textAnchor="middle">
                                • GENUINE QUALITY • EST. 2024
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-stone-400 dark:text-stone-600">
         <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;