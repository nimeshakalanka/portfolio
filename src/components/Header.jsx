import React from 'react';

const SunIcon = ({ size = 24 }) => (
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
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M4.93 19.07l1.41-1.41" />
    <path d="M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = ({ size = 24 }) => (
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
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const Header = ({ theme, toggleTheme }) => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 py-4 shadow-sm ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold">
          <span className="text-gradient">Portfolio</span>
        </h1>
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium transition-colors duration-300 hover:text-blue-500 ${theme === 'dark' ? 'text-zinc-300' : 'text-gray-600'}`}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'hover:bg-zinc-700' : 'hover:bg-gray-200'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon size={24} /> : <MoonIcon size={24} />}
          </button>
          <a
            href="#contact"
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
