import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import classNames from 'classnames';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="absolute top-0 left-0 w-full z-10 flex justify-between items-center py-6 px-4">
      <h1
        className="font-semibold italic text-6xl pl-10 sm:pl-20">a.
      </h1>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none pt-4 pr-10 sm:pr-16">
          <FaBars className="text-3xl" />
        </button>
      </div>

      <nav
        className={classNames(
          "absolute top-16 right-0 transition-all duration-300 md:static md:flex md:justify-end ",
          {
            "bg-gray-800 max-h-screen w-48 p-6 rounded-lg shadow-lg": isOpen,
            "hidden": !isOpen,
            "flex md:pr-10 lg:pr-20": !isOpen
          }
        )}
      >
        <ul className="flex flex-col md:flex-row gap-4">
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