import React from 'react';
import { Code } from 'lucide-react';

const About = ({ darkMode }) => {
  const techStack = ['Python', 'React', 'Node.js', 'TypeScript', 'Docker'];

  return (
    <section id="about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative -ml-20">
            <div className={`w-80 h-80 mx-auto rounded-2xl ${darkMode ? 'bg-gradient-to-r from-purple-600/30 to-blue-600/30' : 'bg-gradient-to-r from-blue-600/30 to-purple-600/30'} flex items-center justify-center backdrop-blur-sm transform hover:rotate-3 transition-all duration-500`}>
              <img
                src="https://res.cloudinary.com/dluwvqdaz/image/upload/v1758879998/me_xhsk42.pngss" 
                alt="Nimesh Akalanka"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute inset-0 w-80 h-80 mx-auto rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-xl"></div>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed opacity-90">
              I am Nimesh Akalanka, a 22-year-old undergraduate pursuing my B.Sc. (Hons) in Information Systems at Sabaragamuwa University of Sri Lanka. I am a passionate full-stack website developer, with skills in both front-end and back-end development.
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Since 2021, I have worked as a freelancer on platforms like Fiverr, where I specialize in creating Telegram bots. This freelance experience has allowed me to apply my technical knowledge to real-world projects and build a strong professional portfolio.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'} transform hover:scale-105 transition-all duration-300`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
