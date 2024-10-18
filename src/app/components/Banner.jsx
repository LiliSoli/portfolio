"use client"

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  const scrollToSection = () => {
    const section = document.getElementById('portfolio'); 
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className=''>
      <img src="" alt="image banner" className="mb-4" />
      <p>Welcome!</p>
      <FontAwesomeIcon 
        icon={faCircleChevronDown} 
        className="text-black text-4xl" 
        onClick={scrollToSection}
      />
    </section>
  );
}

export default Banner;
