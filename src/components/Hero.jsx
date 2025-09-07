import React from 'react';
import { Terminal, Database } from 'lucide-react';

const Hero = ({ darkMode, scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center z-10 mt-20">
        {/* 3D Animated Icon */}
        <div className="mb-8 relative">
          <div className={`w-32 h-32 mx-auto rounded-full ${darkMode ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gradient-to-r from-blue-600 to-purple-600'} flex items-center justify-center transform hover:scale-110 transition-all duration-500 animate-pulse`}>
            <img src='mylogo.png' alt='logo'></img>
          </div>
          <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-30 blur-xl animate-pulse"></div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-gradient bg-300%">
            Nimesh Akalanka
          </span>
        </h1>
        
        <div className="text-xl md:text-2xl mb-8 opacity-90">
          <span className="typing-animation">Undergraduate Information Systems Student || Full Stack Developer</span>
        </div>

        <p className="text-m md:text-lg mb-12 opacity-80 max-w-2xl mx-auto">
          Passionate about crafting efficient and scalable digital solutions, I specialize in fullstack development and creating intelligent Telegram chatbots. As an undergraduate in Information Systems, I’m driven by curiosity for emerging technologies and a dedication to delivering impactful user experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-4 border-2 border-purple-600 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 ${darkMode ? 'hover:bg-purple-600' : 'hover:bg-purple-600 hover:text-white'}`}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className={`w-16 h-16 rounded-lg ${darkMode ? 'bg-purple-600/20' : 'bg-blue-600/20'} flex items-center justify-center backdrop-blur-sm`}>
          <Terminal className="w-8 h-8" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 animate-float-delayed">
        <div className={`w-16 h-16 rounded-lg ${darkMode ? 'bg-blue-600/20' : 'bg-purple-600/20'} flex items-center justify-center backdrop-blur-sm`}>
          <Database className="w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;