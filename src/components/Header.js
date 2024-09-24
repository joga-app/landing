import React, { useState } from "react";
import jogaLogo from '../images/logo.png';
import DownloadAppButton from "./DownloadAppButton";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-5 px-4 md:px-16 lg:px-32"> {/* Added background color */}
      <div className="mx-auto text-grey900 flex items-center justify-between max-w-[1280px]">
        <img src={jogaLogo} alt="Joga Logo" className="mr-4" />

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation (Desktop and Expanded Mobile) */}
        <div className={`md:flex items-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav>
            <ul className="flex flex-col md:flex-row font-manrope font-bold text-md space-y-4 md:space-y-0 md:space-x-6 mr-10">
              <li className="flex items-center">
                <a href="#home">Home</a>
              </li>
              <li className="flex items-center">
                <a href="#funcionalidades">Funcionalidades</a>
              </li>
              <li className="flex items-center">
                <a href="#bora-jogar">Bora Jogar?</a>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block mt-4 md:mt-0"> {/* Adjusted margin for mobile */}
            <DownloadAppButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;