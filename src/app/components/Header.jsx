"use client";

import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showName, setShowName] = useState(false);
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderDone(true);
      setShowName(true); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full z-10 flex justify-between items-center py-6 px-4">
      <div className="relative pl-2 sm:pl-20 flex items-center">
        <h2 className="font-semibold italic text-3xl md:text-6xl">a.</h2>

      {showName && (
        <div className="w-[150px] md:w-[200px] overflow-hidden">
          <span
            className="inline-block font-semibold italic text-md md:text-2xl px-4 md:pt-4 text-white animate-slide"
            style={{ whiteSpace: 'nowrap' }}
          >
            aurélie solier
          </span>
        </div>
        )}
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none pt-2 pr-2 sm:pr-16 md:pt-4 md:pr-10 ">
          <FaBars className="text-xl md:text-3xl" />
        </button>
      </div>

      <nav
        className={classNames(
          "absolute top-16 right-0 transition-all duration-300 lg:static lg:flex lg:justify-end ",
          {
            "bg-gray-800 max-h-screen w-48 p-6 rounded-lg shadow-lg": isOpen,
            "hidden": !isOpen,
            "flex md:pr-10 lg:pr-20": !isOpen
          }
        )}
      >
        <ul className="flex flex-col lg:flex-row gap-4">
          <li>
            <a
              href="#bienvenue"
              onClick={() => isOpen && toggleMenu()}
              className={classNames(
                "text-lg text-white rounded-lg",
                {
                  "px-4 py-2": isOpen,
                  "md:p-4 hover:text-black hover:bg-gradient-to-r from-green-400 to-teal-400": !isOpen
                }
              )}
            >
              Bienvenue
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => isOpen && toggleMenu()}
              className={classNames(
                "text-lg text-white rounded-lg",
                {
                  "px-4 py-2": isOpen,
                  "md:p-4 hover:text-black hover:bg-gradient-to-r from-green-400 to-teal-400": !isOpen
                }
              )}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={() => isOpen && toggleMenu()}
              className={classNames(
                "text-lg text-white rounded-lg",
                {
                  "px-4 py-2": isOpen,
                  "md:p-4 hover:text-black hover:bg-gradient-to-r from-green-400 to-teal-400": !isOpen
                }
              )}
            >
              Compétences
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => isOpen && toggleMenu()}
              className={classNames(
                "text-lg text-white rounded-lg",
                {
                  "px-4 py-2": isOpen,
                  "md:p-4 hover:text-black hover:bg-gradient-to-r from-green-400 to-teal-400": !isOpen
                }
              )}
            >
              Contact
            </a>
          </li>
        </ul>

      </nav>
    </header>
  );
};

export default Header;