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

const ImageContainer = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;

const Title = styled.div`
  decoration-text: none;
  display: inline-block;
  font-size: 1em;
  color: black;
`;

const PriceText = styled.span`
  margin-left: auto; /* 가운데 정렬 스타일 추가 */
  color: black;
  font-weight: bold;
  font-size: 1.2em;
  text-align: center;
`;

const ProductCard = ({ product }) => {
  return (
    <ProductContainer to={`/product/${product.id}`}>
      <ImageContainer>
        <Photo src={process.env.REACT_APP_API_URL + product.image} alt={product.productName} className="card" />
      </ImageContainer>
      <div>
        <Title>{product.productName}</Title>
        <br/><br/>
        <PriceText>{comma(product.price)}원</PriceText>
        
      </div>
    </ProductContainer>
  );
};

export default ProductCard;