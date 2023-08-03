import React from 'react';
import styled from 'styled-components';
import ProductCard from '../molecules/ProductCard';

const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  margin: 1rem 0;
  width: 100%;
  max-width: inherit;
  margin-right: 1rem;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 12em;
`;

const ProductGrid = ({ products = [] }) => {
  return (
    <ProductContainer>
        <Product>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Product>
    </ProductContainer>
  );
};

export default ProductGrid;