import React from 'react';
import './Header.css'; // Arquivo de estilos

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        SAULO CANDEIRA
        {/* <img src="path-to-logo.png" alt="Logo" /> */}
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="/" className="header__nav-link">Sobre</a>
          </li>
          <li className="header__nav-item">
            <a href="/about" className="header__nav-link">Serviços</a>
          </li>
          <li className="header__nav-item">
            <a href="/services" className="header__nav-link">Portifolio</a>
          </li>
          {/* <li className="header__nav-item">
            <a href="/contact" className="header__nav-link">Contact</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;