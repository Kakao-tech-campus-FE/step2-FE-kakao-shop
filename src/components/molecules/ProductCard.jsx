import React from 'react';
import Card from '../atoms/Card';
const staticServerUri = process.env.REACT_APP_PATH || "";

const ProductCard = ({ product }) => {
    return (
        <>
            < Card to={`${staticServerUri}/product/${product.id}`
            }>
                <img src={`${staticServerUri}/${product.image}`} alt={product.name} width='200px'></img>
                <div>{product.productName}</div>
                <div>{product.price}원</div>
            </Card ></>

    );
};


export default ProductCard;