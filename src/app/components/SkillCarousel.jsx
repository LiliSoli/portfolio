"use client";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import skillsData from '@data/skills.json';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SkillCarousel = () => {
  const categories = {
    "Langages et frameworks": [],
    "Outils de développement": [],
    "Méthodologies et collaboration": []
  };

  skillsData.forEach(skill => {
    categories[skill.category].push(skill);
  });

  return (
    <div className="flex flex-col items-center px-16 py-16 max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows
        renderArrowPrev={(clickHandler) => (
          <button 
            onClick={clickHandler} 
            className="absolute inset-y-0 z-10 p-4 transition-all duration-300 transform text-gray-600 hover:text-gray-950 "
            style={{ fontSize: '3rem' }}
          >
            <FaChevronLeft />
          </button>
        )}
        renderArrowNext={(clickHandler) => (
          <button 
            onClick={clickHandler} 
            className="absolute right-0 inset-y-0 z-10 p-4 transition-all duration-300 transform text-gray-600 hover:text-gray- "
            style={{ fontSize: '3rem' }}
          >
            <FaChevronRight />
          </button>
        )}
      >
        {Object.keys(categories).map((category) => (
          <div key={category} className="relative flex flex-col items-center w-full p-8">
            <h2 className="text-lg font-bold mb-16 text-gray-700">{category}</h2>
            <div className="flex flex-wrap max-w-lg justify-center gap-8 mb-16">
              {categories[category].map(skill => (
                <div
                  key={skill.id}
                  className="w-24 h-32 flex items-center justify-center"
                >
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    title={skill.name}
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SkillCarousel;
