import React from 'react';

const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-full z-50 flex flex-col items-center bg-gradient-to-r from-green-400 to-teal-400 p-4'>
      <img src="" alt="Logo" className="mb-4" />
      <nav>
        <ul className='flex gap-6'>
          <li><a href="#home" className="text-lg text-white hover:font-bold">Bienvenue</a></li>
          <li><a href="#portfolio" className="text-lg text-white hover:font-bold">Portfolio</a></li>
          <li><a href="#skills" className="text-lg text-white hover:font-bold">Compétences</a></li>
          <li><a href="#contact" className="text-lg text-white hover:font-bold">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
