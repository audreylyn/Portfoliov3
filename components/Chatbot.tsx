import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Audreylyn's virtual assistant. Ask me anything about her projects, skills, or internship experience." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = 'gemini-2.5-flash';
      
      const systemInstruction = `
        You are a helpful and professional virtual assistant for Audreylyn Moraña's portfolio website. 
        Your goal is to answer visitor questions based on her skills, experience, and projects.
        
        Key Information about Audreylyn:
        - **Role:** BSIT Student at Pamantasan ng Lungsod ng Valenzuela (PLV), Web Developer, UI/UX Designer.
        - **Internship:** Completed at PLV IT Office. 486 hours. Duties included hardware troubleshooting, software installation, networking, and creating documentation.
        - **Tech Stack:** HTML5, CSS3, JavaScript, PHP, Laravel, MySQL, React, Tailwind CSS, Figma, Git.
        - **Key Projects:**
          1. Student Information System (Laravel, MySQL).
          2. Inventory Management System (VB.NET, MSSQL).
          3. E-Commerce Dashboard (React, Node.js).
          4. Task Master (Vue.js, Firebase).
        - **Traits:** Dedicated, detail-oriented, strong problem-solving skills, eager to learn modern technologies.
        
        Tone: Friendly, professional, and concise.
        If asked about contact info, refer them to the contact form or email: audreylynmorana@gmail.com.
        Do not make up facts not present in this context.
      `;

      const chat = ai.chats.create({
        model: model,
        config: { systemInstruction },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessage({ message: userMessage });
      const responseText = result.text;

      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center border border-white/10 ${
          isOpen 
            ? 'bg-stone-800 text-white rotate-90' 
            : 'bg-orange-600 text-white hover:bg-orange-700'
        }`}
        aria-label="Toggle Chatbot"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] max-h-[600px] h-[70vh] bg-stone-50 border border-stone-200 rounded-2xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-stone-200 bg-white rounded-t-2xl flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display font-bold text-stone-900">Audreylyn's AI</h3>
            <span className="text-[10px] uppercase tracking-widest text-stone-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              Online
            </span>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-stone-50/50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-stone-900 text-white rounded-tr-sm'
                    : 'bg-white border border-stone-200 text-stone-700 rounded-tl-sm shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-tl-sm flex gap-1 items-center">
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-stone-200 rounded-b-2xl">
          <div className="relative flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me a question..."
              className="w-full bg-stone-100 border-none rounded-full py-3 pl-4 pr-12 text-sm text-stone-900 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all placeholder-stone-400"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="absolute right-2 p-2 bg-orange-600 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-700 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="mt-2 flex justify-center items-center gap-1 text-[10px] text-stone-400">
             <Sparkles className="w-3 h-3 text-orange-400" />
             <span>Powered by Gemini</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Chatbot;
