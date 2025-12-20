import React from 'react';

const VideoIntro: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-stone-50 border-b border-stone-200 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs text-orange-600 uppercase tracking-widest block">
            Video Resume
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-stone-900">
            A Minute of <span className="italic font-serif text-stone-400">My Story.</span>
          </h2>
          <p className="max-w-xl mx-auto text-stone-600 text-sm md:text-base leading-relaxed">
            Get a glimpse into my passion for technology, my academic journey at PLV, and my dedication to web development.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-stone-200 bg-stone-900">
          
          {/* Vimeo Embed */}
          {/* Replace the 'src' URL below with your specific Vimeo video link */}
          <iframe 
            src="https://player.vimeo.com/video/1148233527?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            className="absolute top-0 left-0 w-full h-full" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
            title="Introduction Video"
          ></iframe>

        </div>

      </div>
    </section>
  );
};

export default VideoIntro;