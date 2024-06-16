import React from 'react';
import Header from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';
import './Home.css'; // Arquivo de estilos
import Courses from '../../components/Courses/Courses';
import FounderCard from '../../components/FounderCard/FounderCard';

const Home: React.FC = () => {
  
    const founder = {
        name: 'Saulo Candeira',
        position: 'Desenvolvedor de Software e Eletrônica',
        image: 'https://via.placeholder.com/150',
        description: 'Sou formado em Gestão de Negócios, Análise e Desenvolvimento de Sistemas, com pós-graduação em Engenharia de Software. Tenho uma sólida experiência na integração de soluções tecnológicas, combinando habilidades técnicas avançadas com uma visão estratégica para desenvolvimento de software e sistemas eletrônicos.'
    };
  
    return (
    <div className="home">
        
      <Header />

      
      <main className="home__main">
        <section className="home__hero">
         
            <FounderCard {...founder} />
            <Projects />
            <Courses/>
         
        </section>

         

      </main>
      
      
      <footer className="home__footer">
        <p>&copy; 2024 Nosso Website. Todos os direitos reservados.</p>
      </footer>


    </div>
  );
};

export default Home;