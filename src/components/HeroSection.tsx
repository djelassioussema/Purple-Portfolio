import React, { useEffect, useState } from 'react';
import { Download, Zap, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Bonjour,';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Animated greeting */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="text-white">{displayText.slice(0, -1)}</span>
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {displayText.slice(-1)}
          </span>
          <span className="animate-pulse">|</span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
          Solutions Architect & AI Engineer
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Building innovative AI solutions and scalable architectures that drive business transformation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>Download CV</span>
          </button>
          <button className="group border border-gray-600 hover:border-purple-500 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 hover:bg-purple-500/10">
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
            <span>Let's Build Together</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-gray-500 text-sm">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 text-purple-500" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;