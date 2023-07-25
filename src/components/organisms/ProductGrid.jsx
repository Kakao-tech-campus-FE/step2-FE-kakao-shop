import React from 'react';
import ProductCard from '../molecules/ProductCard';

export default function ProductGrid({ products }) {
  // presentational component: no logic, only UI
  return (
    <div className='grid grid-cols-4 gap-1 my-1 w-full max-w-full'>
      {products
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : null}
    </div>
  );
}
