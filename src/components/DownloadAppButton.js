import React from 'react';
import googleIcon from '../images/googlePlay.png';

const DownloadAppButton = () => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.uniotech.joga"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300 ease-in-out inline-flex items-center" // Added inline-flex and items-center
    >
      <span className="mr-2"> {/* Added spacing */}
        <img
          src={googleIcon}
          alt="Google Play Icon"
          className="h-8 w-8" // Adjust icon size as needed
        />
      </span>
      Baixe o App
    </a>
  );
};

export default DownloadAppButton;