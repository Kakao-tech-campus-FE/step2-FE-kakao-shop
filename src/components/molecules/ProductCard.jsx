import React from 'react';
import Card from '../atoms/Card';

const ProductCard = ({ product }) => {
    return (
        <Card to={`/product/${product.id}`}>
            <img></img>
        </Card>

    );
};

export default ProductCard;