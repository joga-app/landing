import React from "react";
import jogaLogo from '../images/logo.png';
import DownloadAppButton from "./DownloadAppButton";

const Header = () => {
  return (
    <header className="h-header py-4 px-4 md:px-16 lg:px-32 flex items-center justify-between">
      <img src={jogaLogo} alt="Joga Logo" className="mr-4" />

      <div className="flex items-center">
        <nav>
          <ul className="flex font-manrope font-bold text-md space-x-6 mr-10">
          <li className="flex items-center">
              <a href="#home">Home</a> {/* Link to Home section */}
            </li>
            <li className="flex items-center">
              <a href="#funcionalidades">Funcionalidades</a>
            </li>
            <li className="flex items-center">
              <a href="#bora-jogar">Bora Jogar?</a> 
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <DownloadAppButton />
        </div>
      </div>
    </header>
  );
};

export default Header;