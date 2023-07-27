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
      <div className='mt-2'>
        <h3 className='text-sm font-normal'>{productName}</h3>
        <p className='text-xl font-bold'>{comma(price)}원</p>
      </div>
    </Card>
  );
}
