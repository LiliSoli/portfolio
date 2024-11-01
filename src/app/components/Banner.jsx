"use client";

import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";
import Image from "next/image";
import { useState, useEffect } from "react";

const Banner = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToSection = () => {
    const section = document.getElementById("portfolio");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative flex flex-col items-center justify-center py-28 md:h-screen md:py-0 text-white text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}assets/images/laptop-banner.webp)`,
          opacity: 0.4,
        }}
      ></div>
      <div
        className="relative mt-16 pt-8 p-6 w-[80%] sm:mt-6 sm:pt-4 md:w-2/3 md:pt-4 md:px-11 lg:py-6 lg:w-[60%] lg:px-28 mx-auto bg-gray-200 rounded-lg shadow-md text-gray-700 flex flex-col items-center">
        <div
          className="absolute -top-4 md:-left-24 md:top-1/2 transform -translate-y-1/2 rounded-full w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 shadow-lg">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}assets/images/avatargray.webp`}
            alt="Avatar"
            className="rounded-full w-20 h-20"
            width={20}
            height={20}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <h1
          className="font-bold m-6 md:text-2xl md:m-3 lg:text-3xl tracking-wider">
          BIENVENUE SUR MON <span className="text-green-400">PORTFOLIO</span> !
        </h1>
        <p
          className="text-sm md:text-lg md:mb-6 max-w-lg leading-relaxed">
          Après un parcours en tant qu’assistante sociale, me voilà lancée dans une nouvelle aventure passionnante : le développement web ! Ce portfolio est le fruit de mon dernier projet de formation en intégration web chez OpenClassrooms. 
        </p>
        <p
          className="text-sm md:text-lg md:mb-6 max-w-lg leading-relaxed">
        J&#39;ai hâte de partager avec vous mes projets, réalisés avec cœur et enthousiasme. <br/> Bonne visite !
        </p>
      </div>

      <FaCircleChevronDown
        className="hidden md:block text-white md:text-5xl cursor-pointer absolute bottom-10 transition-all duration-300 transform hover:scale-110 bg-clip-text"
        onClick={scrollToSection}
      />

      {showScrollToTop && (
        <FaCircleChevronUp
          onClick={scrollToTop}
          className="text-white text-5xl cursor-pointer fixed z-40 bottom-10 right-10 transition-all duration-300 transform hover:scale-110 bg-clip-text"
        />
      )}
    </section>
  );
};

export default Banner;