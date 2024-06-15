import React from 'react';
import Header from '../../components/Header/Header';
import Projects from '../../components/Projects/Projects';
import './Home.css'; // Arquivo de estilos

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />

      
      <main className="home__main">
        <section className="home__hero">
            <Projects />
          {/* <h1>Bem-vindo ao Nosso Website!</h1>
          <p>Estamos felizes em tê-lo aqui. Explore nossos serviços e saiba mais sobre nós.</p>
          <a href="/services" className="home__cta">Nossos Serviços</a> */}
        </section>
      </main>
      
      
      <footer className="home__footer">
        <p>&copy; 2024 Nosso Website. Todos os direitos reservados.</p>
      </footer>


    </div>
  );
};

export default Home;