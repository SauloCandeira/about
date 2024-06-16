// FounderCard.tsx

import React from 'react';
import './FounderCard.css';

interface Founder {
    name: string;
    position: string;
    image: string;
    description: string;
    linkedin?: string;
    github?: string;
    resume?: string;
}

const FounderCard: React.FC<Founder> = ({ name, position, image, description, linkedin, github, resume }) => {
    return (
        <div className="founder-card">
            <img src={image} alt={name} className="founder-image" />
            <div className="founder-info">
                <h2>{name}</h2>
                <p className="position">{position}</p>
                <p className="description">{description}</p>
            </div>
            <div className="social-links">
                {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>}
                {github && <a href={github} target="_blank" rel="noopener noreferrer" className="social-icon">GitHub</a>}
                {resume && <a href={resume} target="_blank" rel="noopener noreferrer" className="resume-button">Currículo</a>}
            </div>
        </div>
    );
};

export default FounderCard;
