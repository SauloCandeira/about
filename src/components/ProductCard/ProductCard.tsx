// src/components/ProductCard/ProductCard.tsx

import React from 'react';
import { Product } from '../../Interfaces/InterfaceProduct';
import './ProductCard.css';


const ProductCard: React.FC<Product> = ({ name, description, price, image }) => {
    return (
        <div className="product-card">
            <img src={image} alt={name} className="product-image" />
            <div className="product-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <p className="product-price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default ProductCard;
