import React from 'react';
import heroImage from '../images/hero.png';
import DownloadAppButton from './DownloadAppButton';

const Hero = () => {
  return (
    <section id="home" className=" bg-lightGreen ">
      <div className="mx-auto min-h-[858px]  max-w-[1280px] pb-20 pt-4 md:pt-20 px-8 md:px-16 lg:px-0 flex flex-col-reverse md:flex-row items-center">
        <div className="w-full md:w-2/3 pr-0  text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-12">
            JOGA
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-gray-700 mb-8">
            Conectando Pessoas Através do Esporte
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:max-w-[800px]">
            {/* Increased bottom margin for better spacing */}
            Descubra uma nova maneira de se conectar com outros atletas e organizar
            jogos com facilidade. O JOGA é um aplicativo inovador projetado para
            transformar a forma como você cria partidas esportivas e encontra
            parceiros disponíveis. Com ele, organizar atividades físicas em grupo
            nunca foi tão simples, proporcionando uma experiência esportiva mais
            dinâmica e envolvente para todos os usuários.
          </p>

          <DownloadAppButton></DownloadAppButton>
        </div>

        <div className="w-full md:w-1/3  ">
          {/* Key Changes:
            - w-full for full image width on mobile, md:w-1/3 for desktop
            - mb-8 for bottom margin on mobile, md:mb-0 to remove on desktop
        */}
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;