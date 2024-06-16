// src/components/Marketplace/Marketplace.tsx

import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { Product } from '../../Interfaces/InterfaceProduct';
import './Marketplace.css';

const products: Product[] = [
    {
        id: 1,
        name: 'Controladora oara scooter eletrica',
        description: 'Ideal para patinetes, bicicetas e otros projetos.',
        price: 99.99,
        image: 'https://via.placeholder.com/300'
    },
    {
        id: 2,
        name: 'Acelerador para scooter eletrica',
        description: 'Domine JavaScript e construa aplicações web interativas.',
        price: 79.99,
        image: 'https://via.placeholder.com/300'
    },
    {
        id: 3,
        name: '',
        description: 'Desenvolva aplicações modernas com React.',
        price: 89.99,
        image: 'https://via.placeholder.com/300'
    },
    // Adicione mais produtos conforme necessário
];

const Marketplace: React.FC = () => {
    return (
        <div className="marketplace-container">
            <h1 className="marketplace-title">Marketplace</h1>
            <div className="marketplace">
                {products.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default Marketplace;
