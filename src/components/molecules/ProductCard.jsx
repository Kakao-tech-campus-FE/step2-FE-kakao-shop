import React from 'react';
import Card from '../atoms/Card';
//f
const ProductCard = ({ product }) => {
    return (
        <Card to={`/product/${product.id}`}>
            <img></img>
        </Card>

    );
};

export default ProductCard;