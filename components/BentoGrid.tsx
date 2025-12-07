import React, { useState } from 'react';
import { Mail, ArrowRight, Download, Linkedin, Github, Send, Check, Copy } from 'lucide-react';

const BentoGrid: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 3000);
    }, 1500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('audreylynmorana@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-stone-50 dark:bg-[#050505] transition-colors duration-500 border-b border-stone-200 dark:border-white/5">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-16">
            <span className="text-xs text-orange-600 dark:text-orange-500 uppercase tracking-widest mb-2 block">Get in Touch</span>
            <h2 className="text-3xl md:text-5xl font-display text-stone-900 dark:text-white">Let's start a <span className="text-stone-400 dark:text-stone-600 underline--magical">conversation.</span></h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          
          {/* Contact Form - Spans 3 columns */}
          <div className="lg:col-span-3 bg-white dark:bg-[#0a0a0a] border border-stone-200 dark:border-white/5 p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-sm dark:shadow-none transition-colors duration-500">
             <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                        <label htmlFor="name" className="block text-xs uppercase tracking-wider text-stone-500 mb-2 group-focus-within:text-orange-600 dark:group-focus-within:text-orange-500 transition-colors">Your Name</label>
                        <input 
                            type="text" 
                            id="name"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                            className="w-full bg-transparent border-b border-stone-200 dark:border-white/10 py-3 text-stone-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-stone-300 dark:placeholder-stone-700"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="group">
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-stone-500 mb-2 group-focus-within:text-orange-600 dark:group-focus-within:text-orange-500 transition-colors">Your Email</label>
                        <input 
                            type="email" 
                            id="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                            className="w-full bg-transparent border-b border-stone-200 dark:border-white/10 py-3 text-stone-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors placeholder-stone-300 dark:placeholder-stone-700"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>
                <div className="group">
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-stone-500 mb-2 group-focus-within:text-orange-600 dark:group-focus-within:text-orange-500 transition-colors">Message</label>
                    <textarea 
                        id="message"
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full bg-transparent border-b border-stone-200 dark:border-white/10 py-3 text-stone-900 dark:text-white focus:outline-none focus:border-orange-500 transition-colors resize-none placeholder-stone-300 dark:placeholder-stone-700"
                        placeholder="Tell me about your project..."
                    ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-4">
                    <p className="text-xs text-stone-400">Usually responds within 24 hours</p>
                    <button 
                        type="submit" 
                        disabled={isSubmitting || isSent}
                        className="w-full sm:w-auto group flex items-center justify-center gap-2 px-8 py-3 bg-stone-900 dark:bg-white text-white dark:text-black rounded-full hover:opacity-90 transition-all disabled:opacity-50 font-medium text-sm"
                    >
                        {isSent ? (
                            <>Sent Successfully <Check className="w-4 h-4" /></>
                        ) : (
                            <>Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                        )}
                    </button>
                </div>
             </form>
          </div>

          {/* Contact Details - Spans 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Email Card */}
            <div 
                onClick={copyEmail}
                className="flex-1 bg-stone-100 dark:bg-stone-900/40 border border-stone-200 dark:border-white/5 p-8 rounded-2xl flex flex-col justify-center items-start cursor-pointer group hover:border-orange-500/30 transition-colors relative overflow-hidden"
            >
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs text-stone-500 uppercase tracking-widest mb-1">Email Me</span>
                <div className="flex items-center gap-3 w-full justify-between relative z-10">
                    <h4 className="text-lg md:text-xl text-stone-900 dark:text-white font-medium truncate">audreylynmorana@gmail.com</h4>
                    {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-stone-400 group-hover:text-stone-900 dark:group-hover:text-white transition-colors" />}
                </div>
            </div>

            {/* Resume & Socials Grid */}
            <div className="grid grid-cols-2 gap-6 min-h-[180px]">
                {/* Resume */}
                <a href="#" className="bg-stone-900 dark:bg-stone-800 p-6 rounded-2xl flex flex-col justify-between group hover:bg-stone-800 dark:hover:bg-stone-700 transition-colors">
                    <div className="flex justify-between items-start">
                        <Download className="w-6 h-6 text-white" />
                        <ArrowRight className="w-4 h-4 text-stone-500 group-hover:text-white group-hover:-rotate-45 transition-all" />
                    </div>
                    <div>
                        <span className="block text-white font-display text-lg">Resume</span>
                        <span className="text-xs text-stone-400 uppercase tracking-wider">PDF</span>
                    </div>
                </a>

                {/* Socials - LinkedIn */}
                <a href="#" className="bg-white dark:bg-white p-6 rounded-2xl flex flex-col justify-between group border border-stone-200 dark:border-white/10 hover:border-blue-500/50 transition-colors">
                    <div className="flex justify-between items-start">
                        <Linkedin className="w-6 h-6 text-[#0077b5]" />
                        <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#0077b5] group-hover:-rotate-45 transition-all" />
                    </div>
                    <div>
                        <span className="block text-stone-900 font-display text-lg">LinkedIn</span>
                        <span className="text-xs text-stone-500 uppercase tracking-wider">Connect</span>
                    </div>
                </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;