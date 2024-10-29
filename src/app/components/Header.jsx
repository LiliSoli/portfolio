import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-around items-center py-10">
      <h1 className="font-semibold italic text-6xl">a.</h1>
      <nav>
        <ul className='flex gap-6'>
          <li><a href="#home" className="text-lg text-white rounded-lg hover:text-black hover:bg-gradient-to-r from-green-400 to-teal-400 p-4">Bienvenue</a></li>
          <li><a href="#portfolio" className="text-lg text-white rounded-lg hover:text-black hover:bg-gradient-to-r from-green-400 to-teal-400 p-4">Portfolio</a></li>
          <li><a href="#skills" className="text-lg text-white rounded-lg hover:text-black hover:bg-gradient-to-r from-green-400 to-teal-400 p-4">Compétences</a></li>
          <li><a href="#contact" className="text-lg text-white rounded-lg hover:text-black hover:bg-gradient-to-r from-green-400 to-teal-400 p-4">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
