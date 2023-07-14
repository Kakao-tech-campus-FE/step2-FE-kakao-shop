import React from 'react';
import Card from '../atoms/Card';

export default function ProductCard({ product }) {
  return (
    <Card to={`/product/${product.id}`}>
      <img src={product.imageUrl} alt={product.name} />
      <div>{product.name}</div>
      <div>{product.price}</div>
    </Card>
  );
}
