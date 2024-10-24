"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  const scrollToSection = () => {
    const section = document.getElementById("portfolio");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-screen bg-black text-white text-center">
      {/* Avatar avec un dégradé */}
      <div className="mb-8 rounded-full w-40 h-40 bg-gradient-to-r from-orange-300 to-red-300 flex items-center justify-center shadow-lg">
        <img
          src="/assets/images/avatar.webp" // Remplace avec le chemin de ton avatar
          alt="Avatar"
          className="rounded-full w-36 h-36" // Ajustement pour s'adapter au conteneur
        />
      </div>

      {/* Message d'accueil avec un titre plus grand et espacé */}
      <h1 className="text-6xl font-bold mb-4 tracking-wider">Salut, je suis Aurélie !</h1>
      <p className="text-xl mb-16 max-w-lg leading-relaxed">
        Développeur passionné, je crée des applications web modernes et performantes. Découvrez mes projets ci-dessous !
      </p>

      {/* Icône pour faire défiler, sans animation mais avec effet de hover et clic */}
      <FontAwesomeIcon
        icon={faCircleChevronDown}
        className="text-white text-5xl cursor-pointer absolute bottom-10 transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-orange-300 to-red-300 bg-clip-text"
        onClick={scrollToSection}
      />
    </section>
  );
};

export default Banner;



// "use client"

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

// const Banner = () => {
//   const scrollToSection = () => {
//     const section = document.getElementById('portfolio'); 
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="flex flex-col min-h-screen pt-32">
//       <img src="" alt="image banner" className="mb-4" />
//       <p>Welcome!</p>
//       <FontAwesomeIcon 
//         icon={faCircleChevronDown} 
//         className="text-black text-4xl" 
//         onClick={scrollToSection}
//       />
//     </section>
//   );
// }

// export default Banner;
