import React from 'react';
import Card from '../atoms/Card';
import Photo from '../atoms/Photo';
import { comma } from '../../utils/convert';

export default function ProductCard({
  product: { id, productName, image, price },
}) {
  return (
    <Card to={`/product/${id}`}>
      <Photo src={image} alt={productName} />
      <div>
        <h3>{productName}</h3>
        <p>{comma(price)}원</p>
      </div>
    </Card>
  );
}
