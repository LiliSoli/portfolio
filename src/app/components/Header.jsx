import React from 'react';

const Header = () => {
  return (
    <div className='flex flex-col items-center bg-[#e28570] p-4'>
      <img src="" alt="Logo" className="mb-4" />
      <nav>
        <ul className='flex gap-6'>
          <li><a href="#home" className="text-lg text-white hover:font-bold">Bienvenue</a></li>
          <li><a href="#portfolio" className="text-lg text-white hover:font-bold">Portfolio</a></li>
          <li><a href="#skills" className="text-lg text-white hover:font-bold">Skills</a></li>
          <li><a href="#contact" className="text-lg text-white hover:font-bold">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
