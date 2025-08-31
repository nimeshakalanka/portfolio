import React from 'react';

const Footer = ({ theme }) => {
  return (
    <footer className={`py-6 px-4 md:px-8 text-center ${theme === 'dark' ? 'bg-zinc-800 text-zinc-400' : 'bg-gray-200 text-gray-500'} transition-colors duration-500`}>
      <p>&copy; {new Date().getFullYear()} Jane Doe. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
