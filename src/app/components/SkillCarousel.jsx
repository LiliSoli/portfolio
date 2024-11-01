"use client";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import skillsData from '@data/skills.json';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SkillCarousel = () => {
  const categories = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div
      className="relative flex flex-col items-center py-8 mx-auto bg-gray-200 rounded-lg shadow-md sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-[80%] sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows
        className="relative w-full"
        renderArrowPrev={(clickHandler) => (
          <button
            aria-label="Précédent"
            onClick={clickHandler}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-4xl text-gray-600 hover:text-gray-950"
          >
            <FaChevronLeft />
          </button>
        )}
        renderArrowNext={(clickHandler) => (
          <button
            aria-label="Suivant"
            onClick={clickHandler}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-4xl text-gray-600 hover:text-gray-950"
          >
            <FaChevronRight />
          </button>
        )}
      >
        {Object.keys(categories).map((category) => (
          <div
            key={category}
            className="flex flex-col items-center py-8 px-4 md:px-0"
          >
            <h2 className="text-lg font-bold mb-8 text-gray-700">
              {category}
            </h2>
            <div className="flex flex-wrap max-w-[50%] justify-center gap-8 mb-16">
              {categories[category].map(skill => (
                <div
                  key={skill.id}
                  className="w-16 h-20 flex items-center justify-center"
                  title={skill.name}
                >
                  <Image
                    src={skill.img}
                    alt={skill.name}
                    title={skill.name}
                    width={60}
                    height={60}
                    loading="lazy"
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
