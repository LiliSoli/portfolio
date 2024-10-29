"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Banner = () => {
  const scrollToSection = () => {
    const section = document.getElementById("portfolio");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-white text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_PATH}assets/images/laptop-banner.jpg)`,
          opacity: 0.4,
        }}
      ></div>
      <div className="relative w-1/2 p-8 mx-auto bg-gray-100 rounded-lg shadow-md text-gray-700 flex flex-col items-center">
        <div className="absolute -left-24 top-1/2 transform -translate-y-1/2 rounded-full w-48 h-48 shadow-lg">
          <Image
            width={40}
            height={40}
            layout="responsive"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}assets/images/avatargray.png`}
            alt="Avatar"
            className="rounded-full w-40 h-40"
          />
        </div>
        <h1 className="text-3xl font-bold pt-24 mb-4 tracking-wider">
          BIENVENUE SUR MON <span className="text-green-400">PORTFOLIO !</span>
        </h1>
        <p className="text-xl mb-16 max-w-lg leading-relaxed">
          Développeuse passionnée, je crée des applications web modernes et performantes. Découvrez mes projets ci-dessous ! Et voilà un test.
        </p>
      </div>


        {/* <Image
            width={1/3}
            height={1/3}
            layout="responsive"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}assets/images/laptop-banner.jpg`}
            alt="Avatar"
            className="opacity-40"
          /> */}



      {/* <div className="relative w-1/2 h-fit p-8 mx-auto bg-gray-100 rounded-lg shadow-md text-gray-700 flex flex-col items-center justify-center ">
          <Image
            width={1/3}
            height={1/3}
            layout="responsive"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}assets/images/laptop-banner.jpg`}
            alt="Avatar"
            className=""
          />
        <div className="absolute -left-24 top mb-8 rounded-full w-48 h-48 bg-gradient-to-r from-orange-300 to-red-300 flex items-center justify-center shadow-lg">
          <Image
            width={40}
            height={40}
            layout="responsive"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}assets/images/avatargray.png`}
            alt="Avatar"
            className="rounded-full w-40 h-40"
          />
        </div>

        <h1 className="text-3xl font-bold pt-24 mb-4 tracking-wider">BIENVENUE SUR MON <span className="text-green-400">PORTFOLIO !</span></h1>
        <p className="text-xl mb-16 max-w-lg leading-relaxed">
          Développeuse passionnée, je crée des applications web modernes et performantes. Découvrez mes projets ci-dessous ! Et voilà un test.
        </p>
      </div> */}
      <FontAwesomeIcon
        icon={faCircleChevronDown}
        className="text-white text-5xl cursor-pointer absolute bottom-10 transition-all duration-300 transform hover:scale-110 bg-clip-text"
        onClick={scrollToSection}
      />
    </section>
  );
};

export default Banner;