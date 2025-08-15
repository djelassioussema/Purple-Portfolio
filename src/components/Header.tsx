import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/95 backdrop-blur-sm border-b border-gray-800/50">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          <span className="text-white font-semibold text-lg">Ali Mohsin</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700/50">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-white">Home</span>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Experience</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Case Studies</a>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-300 hover:text-white transition-colors">
            <Sun className="w-5 h-5" />
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;