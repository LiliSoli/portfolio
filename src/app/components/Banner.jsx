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
      <div className="mb-8 rounded-full w-48 h-48 bg-gradient-to-r from-orange-300 to-red-300 flex items-center justify-center shadow-lg">
        <img
          src="/assets/images/avatar.webp"
          alt="Avatar"
          className="rounded-full w-44 h-44"
        />
      </div>

      <h1 className="text-6xl font-bold mb-4 tracking-wider">Salut, je suis Aurélie !</h1>
      <p className="text-xl mb-16 max-w-lg leading-relaxed">
        Développeuse passionnée, je crée des applications web modernes et performantes. Découvrez mes projets ci-dessous !
      </p>

      <FontAwesomeIcon
        icon={faCircleChevronDown}
        className="text-white text-5xl cursor-pointer absolute bottom-10 transition-all duration-300 transform hover:scale-110 bg-clip-text"
        onClick={scrollToSection}
      />
    </section>
  );
};

export default Banner;