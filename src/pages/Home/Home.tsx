// src/pages/Home/Home.tsx

import React from 'react';
import Header from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';
import './Home.css'; // Arquivo de estilos
import FounderCard from '../../components/FounderCard/FounderCard';
import Services from '../../components/Services/Services';
import { useTranslation } from 'react-i18next';
import WhatsappButton from '../../components/WhatsappButton/WhatsappButton'; // Importando o componente

const Home: React.FC = () => {
  const { t } = useTranslation();

  const founder = {
    name: t('founderCard.name'),
    position: t('founderCard.position'),
    image: 'https://via.placeholder.com/150',
    description: t('founderCard.description'),
    linkedin: 'https://www.linkedin.com/in/saulocandeira',
    github: 'https://github.com/saulocandeira',
    resume: 'https://example.com/resume.pdf'
  };

  return (
    <div className="home">
      <Header />

      <main className="home__main">
        <section className="home__hero">
          <FounderCard {...founder} />
          <Services />
          <Projects />
        </section>
      </main>

      <footer className="home__footer">
        <p>&copy; 2024 {t('footer.name')}. {t('footer.allRightsReserved')}</p>
      </footer>

      {/* Usando o componente WhatsappButton */}
      <WhatsappButton phoneNumber="5561981374279" /> {/* Substitua pelo seu número */}
    </div>
  );
};

export default Home;
