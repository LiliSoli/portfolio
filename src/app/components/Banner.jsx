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
    <section className="relative flex flex-col items-center justify-center h-screen text-white text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}assets/images/laptop-banner.webp)`,
          opacity: 0.4,
        }}
      ></div>
      <div className="relative w-1/2 p-8 mx-auto bg-gray-100 rounded-lg shadow-md text-gray-700 flex flex-col items-center">
        <div className="absolute -left-24 top-1/2 transform -translate-y-1/2 rounded-full w-48 h-48 shadow-lg">
          <Image
            width={40}
            height={40}
            layout="responsive"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}assets/images/avatargray.webp`}
            alt="Avatar"
            className="rounded-full w-40 h-40"
          />
        </div>
        <h1 className="text-3xl font-bold  m-6 tracking-wider">
          BIENVENUE SUR MON <span className="text-green-400">PORTFOLIO</span> !
        </h1>
        <p className="text-lg mb-6 max-w-lg leading-relaxed">
          Après un parcours en tant qu’assistante sociale, me voilà lancée dans une nouvelle aventure passionnante : le développement web ! Ce portfolio est le fruit de mon dernier projet de formation en intégration web chez OpenClassrooms. 
        </p>
        <p className="text-lg mb-6 max-w-lg leading-relaxed">
        J’ai hâte de partager avec vous mes projets, réalisés avec cœur et enthousiasme. <br/> Bonne visite !
        </p>


      </div>

      <FaCircleChevronDown
        className="text-white text-5xl cursor-pointer absolute bottom-10 transition-all duration-300 transform hover:scale-110 bg-clip-text"
        onClick={scrollToSection}
      />

      {showScrollToTop && (
        <FaCircleChevronUp
          onClick={scrollToTop}
          className="text-white text-5xl cursor-pointer fixed z-50 bottom-10 right-10 transition-all duration-300 transform hover:scale-110 bg-clip-text"
        />
      )}
    </section>
  );
};

export default Banner;