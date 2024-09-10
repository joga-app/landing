import React from 'react';
import { MdEmail } from 'react-icons/md'; // Using react-icons for the icon
const EmailButton = () => {
  return (
    <a
      href="mailto:contato@uniotech.co"
      rel="noopener noreferrer"
      className="border border-white hover:border-gray-200 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out inline-flex items-center"
    >
      <MdEmail className="mr-2 h-4 w-4" />
      Email
    </a>
  );
};

export default EmailButton;