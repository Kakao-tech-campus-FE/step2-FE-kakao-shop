import React from 'react';
import styled from 'styled-components';
import Card from '../atoms/Card';
import { comma } from '../../utils/convert';
import Photo from '../atoms/Photo';

const ProductContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
`;

const ProductImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const ProductName = styled.div`
  decoration-text: none;
  display: inline-block;
  font-size: 1em;
  font-weight: 500;
  color: black;
`;

const ProductPrice = styled.span`
  margin-left: auto; 
  color: black;
  font-weight: 500;
  font-size: 1.2em;
  text-align: center;
`;

const ProductCard = ({ product }) => {
  return (
    <ProductContainer to={`/product/${product.id}`}>
      <ProductImage>
        <Photo src={process.env.REACT_APP_API_URL + product.image} alt={product.productName} className="card" />
      </ProductImage>
      <ProductName>{product.productName}</ProductName>
        <br/><br/>
      <ProductPrice>{comma(product.price)}원</ProductPrice>
    </ProductContainer>
  );
};

export default ProductCard;