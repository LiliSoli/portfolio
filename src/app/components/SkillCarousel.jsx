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
    <div className="relative flex flex-col items-center py-8 mx-auto bg-gray-200 rounded-lg shadow-md sm:px-8 md:px-12 lg:px-16 xl:px-24 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
      <Carousel
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows
        className="relative w-full"
        renderArrowPrev={(clickHandler) => (
          <button 
            onClick={clickHandler} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-gray-600 hover:text-gray-950"
            style={{ fontSize: '2.5rem' }}
          >
            <FaChevronLeft />
          </button>
        )}
        renderArrowNext={(clickHandler) => (
          <button 
            onClick={clickHandler} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 text-gray-600 hover:text-gray-950"
            style={{ fontSize: '2.5rem' }}
          >
            <FaChevronRight />
          </button>
        )}
      >
        {Object.keys(categories).map((category) => (
          <div key={category} className="flex flex-col items-center py-8 px-4 md:px-0">
            <h2 className="text-lg font-bold mb-8 text-gray-700">{category}</h2>
            <div className="flex flex-wrap max-w-[50%] justify-center gap-8 mb-16">
              {categories[category].map(skill => (
                <div
                  key={skill.id}
                  className="w-16 h-20 flex items-center justify-center"
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


// "use client";

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import skillsData from '@data/skills.json';
// import Image from 'next/image';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const SkillCarousel = () => {
//   const categories = {
//     "Langages et frameworks": [],
//     "Outils de développement": [],
//     "Méthodologies et collaboration": []
//   };

//   skillsData.forEach(skill => {
//     categories[skill.category].push(skill);
//   });

//   return (
//     <div className="relative flex flex-col items-center py-8 max-w-80 sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-screen-xl mx-auto bg-gray-100 rounded-lg shadow-md">
//       <Carousel
//         infiniteLoop
//         showThumbs={false}
//         showStatus={false}
//         useKeyboardArrows
//         className="max-width"
//         renderArrowPrev={(clickHandler) => (
//           <button 
//             onClick={clickHandler} 
//             className="absolute inset-y-0 md:-left-10 z-10 p-2 transition-all duration-300 transform text-gray-600 hover:text-gray-950 "
//             style={{ fontSize: '3rem' }}
//           >
//             <FaChevronLeft />
//           </button>
//         )}
//         renderArrowNext={(clickHandler) => (
//           <button 
//             onClick={clickHandler} 
//             className="absolute right-0 inset-y-0 z-10 p-2 transition-all duration-300 transform text-gray-600 hover:text-gray-950"
//             style={{ fontSize: '3rem' }}
//           >
//             <FaChevronRight />
//           </button>
//         )}
//       >
//         {Object.keys(categories).map((category) => (
//           <div key={category} className="flex flex-col items-center py-8 px-16 md:px-0">
//             <h2 className="text-lg font-bold mb-8 text-gray-700">{category}</h2>
//             <div className="flex flex-wrap max-w-lg justify-center gap-8 mb-16">
//               {categories[category].map(skill => (
//                 <div
//                   key={skill.id}
//                   className="w-16 h-20 flex items-center justify-center"
//                 >
//                   <Image
//                     src={skill.img}
//                     alt={skill.name}
//                     title={skill.name}
//                     width={60}
//                     height={60}
//                     className="rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default SkillCarousel;

// "use client";

// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import skillsData from '@data/skills.json';
// import Image from 'next/image';
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// const SkillCarousel = () => {
//   const categories = {
//     "Langages et frameworks": [],
//     "Outils de développement": [],
//     "Méthodologies et collaboration": []
//   };

//   skillsData.forEach(skill => {
//     categories[skill.category].push(skill);
//   });

//   return (
//     <div className="flex flex-col items-center px-16 py-16 max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-md">
//       <Carousel
//         infiniteLoop
//         showThumbs={false}
//         showStatus={false}
//         useKeyboardArrows
//         renderArrowPrev={(clickHandler) => (
//           <button 
//             onClick={clickHandler} 
//             className="absolute inset-y-0 z-10 p-4 transition-all duration-300 transform text-gray-600 hover:text-gray-950 "
//             style={{ fontSize: '3rem' }}
//           >
//             <FaChevronLeft />
//           </button>
//         )}
//         renderArrowNext={(clickHandler) => (
//           <button 
//             onClick={clickHandler} 
//             className="absolute right-0 inset-y-0 z-10 p-4 transition-all duration-300 transform text-gray-600 hover:text-gray-950"
//             style={{ fontSize: '3rem' }}
//           >
//             <FaChevronRight />
//           </button>
//         )}
//       >
//         {Object.keys(categories).map((category) => (
//           <div key={category} className="relative flex flex-col items-center w-full p-8">
//             <h2 className="text-lg font-bold mb-16 text-gray-700">{category}</h2>
//             <div className="flex flex-wrap max-w-lg justify-center gap-8 mb-16">
//               {categories[category].map(skill => (
//                 <div
//                   key={skill.id}
//                   className="w-24 h-32 flex items-center justify-center"
//                 >
//                   <Image
//                     src={skill.img}
//                     alt={skill.name}
//                     title={skill.name}
//                     width={60}
//                     height={60}
//                     className="rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </div>
//   );
// };

// export default SkillCarousel;
