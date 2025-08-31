const mockProjects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A full-featured e-commerce platform with user authentication, product listings, a shopping cart, and a secure checkout process.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://placehold.co/600x400/2563EB/ffffff?text=E-commerce+Project',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A simple and intuitive task management application to help users organize their daily tasks and boost productivity.',
    technologies: ['React', 'Redux', 'Tailwind CSS'],
    image: 'https://placehold.co/600x400/10B981/ffffff?text=Task+App+Project',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A dynamic weather dashboard that displays real-time weather information for any city using a public API.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Weather API'],
    image: 'https://placehold.co/600x400/F59E0B/ffffff?text=Weather+App+Project',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A modern, responsive personal portfolio website to showcase projects, skills, and contact information.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    image: 'https://placehold.co/600x400/3B82F6/ffffff?text=Portfolio+Project',
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const fetchProjects = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockProjects);
    }, 1000); // Simulate network delay
  });
};
