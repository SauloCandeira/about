// FounderCard.tsx

import React from 'react';
import './FounderCard.css';

interface Founder {
    name: string;
    position: string;
    image: string;
    description: string;
}

const FounderCard: React.FC<Founder> = ({ name, position, image, description }) => {
    return (
        <div className="founder-card">
            <img src={image} alt={name} className="founder-image" />
            <div className="founder-info">
                <h2>{name}</h2>
                <p className="position">{position}</p>
                <p className="description">{description}</p>
            </div>
        </div>
    );
};

export default FounderCard;
