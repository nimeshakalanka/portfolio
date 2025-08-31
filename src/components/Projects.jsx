import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../services/projects';

const ExternalLinkIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.8c0-1.3-.4-2.2-1-3.5 0-.4 1.5-2 1.5-5.5 0-1.2-.5-2-1-2.5.5-.5 1-1.5 1.5-3h-1c-.5 0-1.5.5-2.5 1s-1.5 1-2 1.5c-1 0-2-1-2.5-1.5s-1-1-2-1.5c-.5-.5-1.5-1-2-1.5-1 0-2 1-2 2s.5 2.5 1.5 3.5c1.5 1.5 3 1 4 1h1c0 1.5.5 2 1 2.5a2.5 2.5 0 0 0 2 1h1c0 1.5.5 2.5 1 3a2.5 2.5 0 0 0 2 1" />
  </svg>
);

const Projects = ({ theme }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError("Failed to fetch projects. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="py-12 md:py-24 text-center">
        <div className={`p-6 md:p-10 rounded-2xl shadow-custom ${theme === 'dark' ? 'bg-zinc-800' : 'bg-white'}`}>
          <p className="text-xl font-medium">Loading projects...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="py-12 md:py-24 text-center">
        <div className={`p-6 md:p-10 rounded-2xl shadow-custom ${theme === 'dark' ? 'bg-zinc-800' : 'bg-white'}`}>
          <p className="text-xl font-medium text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className={`mt-4 text-lg md:text-xl ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-500'}`}>
          A selection of my work demonstrating my skills and experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`rounded-2xl shadow-custom ${theme === 'dark' ? 'bg-zinc-800' : 'bg-white'} overflow-hidden transition-transform duration-300 hover:scale-105`}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className={`mb-4 ${theme === 'dark' ? 'text-zinc-400' : 'text-gray-600'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${theme === 'dark' ? 'bg-zinc-700 text-zinc-300' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 font-semibold ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'} hover:text-blue-500 transition-colors duration-300`}
                  >
                    <ExternalLinkIcon size={20} />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 font-semibold ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'} hover:text-blue-500 transition-colors duration-300`}
                  >
                    <GithubIcon size={20} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
