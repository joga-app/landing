import React from 'react';
import jogaLogo from '../images/logoWhite.png';
import downloadImg from '../images/downloadApp.png';
import LinkedInButton from './LinkedInButton';
import EmailButton from './EmailButton';

const Footer = () => {
  return (
    <footer className="relative  bg-primary py-6 px-8 md:px-16 flex justify-between items-center text-white">
      {/* Added items-center for vertical centering */}

      <div className='flex flex-col md:flex-row w-full justify-between items-center'>
        {/* Added justify-between and items-center */}

        <div className='flex flex-col items-start '>
          <img
            src={jogaLogo}
            alt="Joga Logo"
            className='mb-4'
          />

          <p className='max-w-[740px] font-bold text-md md:mr-8  mb-4'>
            Somos o JOGA, uma plataforma que conecta atletas e transforma a organização de partidas esportivas em uma experiência simples e envolvente.
          </p>

          <div className="flex space-x-4 mb-8">
            <LinkedInButton />
            <EmailButton />
          </div>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.uniotech.joga"  // Replace with the actual URL
          target="_blank"  // Opens the link in a new tab
          rel="noopener noreferrer" // Good practice for security
          className="focus:outline-none hidden md:block"
        >
          <img src={downloadImg} alt={'Download App'} />
        </a>

      </div>
      <div className="text-sm text-center absolute bottom-4 left-1/2 -translate-x-1/2 w-full">
        {/* Absolute positioning and centering */}
        Copyright © 2024 Unio-TECH
      </div>

    </footer>
  );
};

export default Footer;