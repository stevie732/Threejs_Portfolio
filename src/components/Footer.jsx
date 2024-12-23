import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-tertiary py-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2">
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a href="#about" className="text-secondary hover:text-white">About</a>
          <a href="#work" className="text-secondary hover:text-white">Work</a>
          <a href="#contact" className="text-secondary hover:text-white">Contact</a>
        </div>
        <div className="text-secondary text-[14px]">
          &copy; {currentYear} Stevie732 - All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;