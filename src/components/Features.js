import React from 'react';
// Import feature images (adjust paths as needed)
import createMatchImg from '../images/createMatch.png';
import geolocationImg from '../images/geolocation.png';
import aiImg from '../images/ai.png';

const featuresData = [
  {
    image: createMatchImg,
    title: 'Crie Partidas',
    description:
      'Organize jogos facilmente com apenas alguns cliques. Escolha o esporte, defina o local e convide amigos ou atletas disponíveis.',
  },
  {
    image: geolocationImg,
    title: 'Geolocalização',
    description:
      'Encontre parceiros e partidas próximas a você, com base na sua localização, para participar de jogos em sua região.',
  },
  {
    image: aiImg,
    title: 'IA',
    description:
      'Recomenda jogos e anúncios personalizados, garantindo que você encontre partidas ideais para o seu perfil e interesses.',
  },
];

const FeatureCard = ({ image, title, description }) => (
  <div >
    <img src={image} alt={title} className="w-full object-cover mb-4" />
    <h3 className="text-3xl font-semibold text-primary mb-2">{title}</h3>
    <p className="text-xl text-gray-700 mb-8 text-left">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section id="funcionalidades" className="min-h-[858px] my-16  px-8 md:px-16 lg:px-0">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-left text-gray-800 mb-8">
          Funcionalidades

        </h2>
        <p className="text-xl text-gray-700 mb-8 text-left w-full max-w-[740px] md:pr-8">
          <p className="text-xl text-gray-700 mb-8 text-left">
            O JOGA simplifica a organização de partidas, conecta você a novos parceiros esportivos próximos, e oferece sugestões personalizadas com IA, tornando sua experiência esportiva mais acessível e relevante.
          </p>
        </p>
        <div className="mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default Features;