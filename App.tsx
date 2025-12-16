import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Portfolio from './components/Portfolio';
import ParallaxBreak from './components/ParallaxBreak';
import Projects from './components/Projects';
import Interiors from './components/Interiors';
import Philosophy from './components/Philosophy';
import Certificates from './components/Certificates';
import Ventures from './components/Ventures';
import BentoGrid from './components/BentoGrid';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import VideoIntro from './components/VideoIntro';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="w-full relative">
        <Navbar />
        <Hero />
        <VideoIntro />
        
        {/* Capability Section: Skills & Domains */}
        <Philosophy />
        
        {/* Experience Section: Internship Context & Duties */}
        <Portfolio />
        <Ventures />
        
        {/* Proof Section: Projects & Certifications */}
        <Projects />
        <Certificates />
        
        {/* Contact Section */}
        <BentoGrid />
        <Footer />
        
        {/* Virtual Assistant */}
        <Chatbot />
      </div>
    </ThemeProvider>
  );
};

export default App;