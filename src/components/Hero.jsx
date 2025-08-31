import React from 'react';

const Hero = ({ theme }) => {
  return (
    <section id="hero" className="py-12 md:py-24 text-center">
      <div className={`p-8 md:p-12 rounded-2xl shadow-custom ${theme === 'dark' ? 'bg-zinc-800' : 'bg-white'}`}>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Hi, I'm <span className="text-gradient">Jane Doe</span>
        </h2>
        <p className="text-lg md:text-xl font-medium mb-6">
          A Full Stack Developer passionate about building beautiful and functional web applications.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300"
          >
            My Work
          </a>
          <a
            href="#contact"
            className={`px-6 py-3 rounded-full font-semibold border-2 ${theme === 'dark' ? 'border-zinc-500 text-zinc-300' : 'border-gray-300 text-gray-600'} hover:border-blue-500 transition-colors duration-300`}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
