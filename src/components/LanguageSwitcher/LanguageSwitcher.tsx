import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

// Importe as bandeiras
import usFlag from '../../assets/us.png';
import brFlag from '../../assets/br.png';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [selectedFlag, setSelectedFlag] = useState(i18n.language === 'pt' ? brFlag : usFlag);

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
    setSelectedFlag(language === 'en' ? usFlag : brFlag);
  };

  return (
    <div className="language-switcher">
      <div className="flag-options">
        <img
          src={usFlag}
          alt="English"
          className={`flag-icon ${selectedFlag === usFlag ? 'selected' : ''}`}
          onClick={() => handleChange('en')}
        />
        <img
          src={brFlag}
          alt="Português"
          className={`flag-icon ${selectedFlag === brFlag ? 'selected' : ''}`}
          onClick={() => handleChange('pt')}
        />
      </div>
    </div>
  );
};

export default LanguageSwitcher;
