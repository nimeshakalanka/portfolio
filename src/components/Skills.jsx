import React, { useState } from "react";

const Skills = ({ darkMode }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ];

  const numSkills = skills.length;
  const radius = 200;

  return (
    <>
      
      <section id="skills" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div
            className={`relative p-10 rounded-2xl overflow-hidden min-h-[500px] flex items-center justify-center ${
              darkMode ? "bg-gray-900/95 border-gray-700" : "bg-white/90 border-gray-200"
            } backdrop-blur-md border shadow-xl`}
          >
            {/* SVG Background - Keep as is */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 600"
              preserveAspectRatio="none"
            >
              {Array.from({ length: 30 }).map((_, i) => (
                <text
                  key={i}
                  x={Math.random() * 800}
                  y={-50}
                  fill="lime"
                  fontSize="18"
                  fontFamily="monospace"
                >
                  {"{ </> }"}
                  <animate
                    attributeName="y"
                    values="-50;650"
                    dur={`${5 + Math.random() * 5}s`}
                    repeatCount="indefinite"
                    begin={`${Math.random() * 5}s`}
                  />
                </text>
              ))}
            </svg>

            {/* Central area to display the hovered icon and its name */}
            <div className="absolute z-20 flex flex-col items-center justify-center text-center p-4">
              <div className={`transition-all duration-300 transform ${hoveredSkill ? 'scale-125 opacity-100' : 'scale-100 opacity-0'}`}>
                {hoveredSkill && (
                  <>
                    <img
                      src={hoveredSkill.icon}
                      alt={hoveredSkill.name}
                      className="w-24 h-24 mb-4"
                    />
                    <span className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                      {hoveredSkill.name}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* The main container for the icons, now static */}
            <div
              className={`absolute w-full h-full transition-all duration-500 ${hoveredSkill ? 'dim-icons' : 'no-dim-icons'}`}
            >
              {skills.map((skill, index) => {
                const angle = (index / numSkills) * 2 * Math.PI;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);
                const isHovered = hoveredSkill && hoveredSkill.name === skill.name;

                return (
                  <div
                    key={skill.name}
                    className="absolute icon-container"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: `translate(-50%, -50%)`,
                      zIndex: isHovered ? 30 : 10,
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-12 h-12 icon-floating"
                      style={{
                        animationDelay: `${Math.random() * 5}s` // Randomize the start of the fuzzy float
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
