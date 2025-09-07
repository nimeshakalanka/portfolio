import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'All Save Bot',
      description: 'A modern telegram bot who can download social media videos without watermark.',
      tech: ['Python', 'Mongo DB', 'TikTok API', 'Meta API'],
      image: 'https://telegra.ph/file/0351e7d492b896af35c1f.png',
      demo: 'https://t.me/AIl_Save_Bot',
      code: 'https://github.com/nimeshakalanka/all_save'
    },
    {
      title: 'Lanka Traval Diaries',
      description: 'Travel guiding website for tourists made using React + JavaScript. Done as a teamwork.',
      tech: ['React', 'JavaScript', 'SASS', 'Tailwind'],
      image: 'https://res.cloudinary.com/dluwvqdaz/image/upload/v1757252594/Screenshot_2025-09-07_191219_ifrzbi.png',
      demo: '#',
      code: 'https://github.com/nimeshakalanka/Lanka-Travel-Diaries'
    },
    {
      title: 'TikTok Downloade API',
      description: 'An API can download TikTok Videos with or without watermark.',
      tech: ['JavaScript', 'Python', 'Cloudfare'],
      image: 'https://res.cloudinary.com/dluwvqdaz/image/upload/v1757253061/Screenshot_2025-09-07_192028_teze3n.png',
      demo: 'https://tiktok-dl.akalankanime11.workers.dev/',
      code: 'https://github.com/nimeshakalanka/Tiktok-Download-API'
    }
  ];

  return (
    <section id="projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transform hover:scale-105 transition-all duration-300 hover:shadow-xl group`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="opacity-80 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.demo}
                    className="flex items-center text-sm text-purple-500 hover:text-purple-400 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                  <a
                    href={project.code}
                    className="flex items-center text-sm text-purple-500 hover:text-purple-400 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
