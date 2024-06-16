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
        description: 'Tenho formação em gestão, tecnologia e idiomas, e sou dedicado ao desenvolvimento de software e eletrônica. Busco integrar o mundo dos softwares, impressão 3D e eletrônica para criar inovações tecnológicas. Atuo como programador e, no meu tempo livre, desenvolvo principalmente integrações de placas programáveis com motores elétricos para máquinas CNC, patinetes, bicicletas e drones.',
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