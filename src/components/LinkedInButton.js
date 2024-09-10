// LinkedInButton.js
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';

const LinkedInButton = () => {
  return (
    <a
      href="https://www.linkedin.com/company/unio-tech"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white hover:border-gray-200 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out inline-flex items-center"
    >
      <FaLinkedinIn className="mr-2 h-4 w-4" />
      LinkedIn
    </a>
  );
};

export default LinkedInButton;