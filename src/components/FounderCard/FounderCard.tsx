// FounderCard.tsx

import React from 'react';
import './FounderCard.css';
import img from '../../assets/SauloCandeira.jpg';
import { useTranslation } from 'react-i18next';

interface Founder {
    linkedin?: string;
    github?: string;
    resume?: string;
}

const FounderCard: React.FC<Founder> = ({ linkedin, github, resume }) => {
    const { t } = useTranslation();

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
                        href={resume}
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
