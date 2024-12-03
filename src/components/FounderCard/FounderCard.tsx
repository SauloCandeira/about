// FounderCard.tsx

import React from 'react';
import './FounderCard.css';
import img from '../../assets/SauloCandeira.jpg';
import curriculo from '../../assets/curriculo-br.jpg';
import resumeUSA from '../../assets/resume-usa.jpg';
import { useTranslation } from 'react-i18next';

interface Founder {
    linkedin?: string;
    github?: string;
    resume?: string;
}

const FounderCard: React.FC<Founder> = ({ linkedin, github, resume }) => {
    const { t, i18n } = useTranslation();

    // Determina o arquivo de currículo com base no idioma
    const resumeFile =
        i18n.language === 'en'
            ? resumeUSA
            :  curriculo;

    return (
        <div className="founder-card">
            <img src={img} alt={t('founderCard.name')} className="founder-image" />
            <div className="founder-info">
                <h2>{t('founderCard.name')}</h2>
                <p className="position">{t('founderCard.position')}</p>
                <p className="description">{t('founderCard.description')}</p>
            </div>
            <div className="social-links">
                {linkedin && (
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        {t('founderCard.socialLinks.linkedin')}
                    </a>
                )}
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        {t('founderCard.socialLinks.github')}
                    </a>
                )}
                {resume && (
                    <a
                        href={resumeFile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                    >
                        {t('founderCard.socialLinks.resume')}
                    </a>
                )}
            </div>
        </div>
    );
};

export default FounderCard;
