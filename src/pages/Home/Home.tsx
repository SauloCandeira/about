import React from 'react';
import Header from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';
import './Home.css'; // Arquivo de estilos
// import Courses from '../../components/Courses/Courses';
import FounderCard from '../../components/FounderCard/FounderCard';
// import Marketplace from '../../components/Marketplace/Marketplace';
import Services from '../../components/Services/Services';
// import HeaderTwo from '../../components/HeaderTwo/HeaderTwo';
import { useTranslation } from 'react-i18next';

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
          {/* <Courses /> */}
          {/* <Marketplace /> */}
        </section>
      </main>

      <footer className="home__footer">
        <p>&copy; 2024 {t('footer.name')}. {t('footer.allRightsReserved')}</p>
      </footer>
    </div>
  );
};

export default Home;
