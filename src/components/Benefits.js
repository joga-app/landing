import React from 'react';
import bottomImg from '../images/bottom.png';
import DownloadAppButton from './DownloadAppButton';

const Benefits = () => {
  return (
    <section id="bora-jogar" className="mb-16  relative overflow-hidden">
      {/* Added overflow-hidden to hide button edges if needed */}

      <div className="max-w-[1280px] px-8 md:px-16 lg:px-0 mx-auto text-left ">
        {/* Text centered by default */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Bora Jogar?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 mb-12 md:w-2/3">
          {/* Added max-w-prose and mx-auto for better readability */}
          O JOGA oferece uma série de benefícios que tornam sua experiência
          esportiva mais agradável e eficiente. Com a organização
          simplificada, o JOGA elimina a complexidade de coordenar jogos,
          permitindo que você crie e participe de partidas com facilidade.
          <br />
          <br />
          Além disso, a plataforma proporciona uma conexão com outros atletas,
          oferecendo a oportunidade de conhecer novos parceiros esportivos e
          expandir sua rede de contatos. Por fim, o JOGA oferece uma
          experiência personalizada, adaptando-se aos seus interesses e
          preferências, garantindo que você participe de jogos e eventos que
          realmente importam para você.
        </p>
        <DownloadAppButton></DownloadAppButton>
      </div>

      <img src={bottomImg} alt={'App Joga'} className="w-full" />



    </section>
  );
};

export default Benefits;