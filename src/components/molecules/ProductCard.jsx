import React from 'react';
import Card from '../atoms/Card';

export default function ProductCard({
  product: { id, productName, image, price },
}) {
  return (
    <li>
      <img src={image} alt={productName} />
      <div>
        <h3>{productName}</h3>
        <p>{`${price}원`}</p>
      </div>
    </li>
  );
}
