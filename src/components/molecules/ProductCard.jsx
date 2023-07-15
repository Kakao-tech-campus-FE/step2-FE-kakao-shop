import React from 'react';
import Card from '../atoms/Card';
import SkeletonElement from '../skeleton/SkeletonElement';

const ProductCard = ({ product }) => {
    return (
        <>
            < Card to={`/product/${product.id}`
            }>
                <img src={process.env.REACT_APP_API_URL + product.image} alt={product.name} width='200px'></img>
                <div>{product.productName}</div>
                <div>{product.price}원</div>
            </Card ></>

    );
};


export default ProductCard;