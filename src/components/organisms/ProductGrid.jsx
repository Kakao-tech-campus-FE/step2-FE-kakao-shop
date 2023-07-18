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
`;

const ProductGrid = ({ products }) => {
  return (
    <Product>
      {products
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : null}
    </Product>
  );
};

export default ProductGrid;