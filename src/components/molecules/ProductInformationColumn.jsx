import React from 'react';
import Photo from '../atoms/Photo';
import { comma } from '../../utils/convert';

export default function ProductInformationColumn({ product }) {
  const { productName, image, price } = product;
  return (
    <div>
      <div>
        <Photo src={image} alt={productName} />
      </div>
      <div>
        <h1>{productName}</h1>
        <p>{comma(price)}원</p>
      </div>
    </div>
  );
}
