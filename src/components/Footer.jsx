import React from 'react';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 px-4 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto text-center">
        <p className="opacity-60">
          Copyright © 2025 - All right reserved by Nimesh Akalanka
        </p>
      </div>
    </footer>
  );
};

export default Footer;