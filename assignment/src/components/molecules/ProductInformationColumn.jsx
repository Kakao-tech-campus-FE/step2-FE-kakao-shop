import React from 'react';
import { comma } from '../../utils/convert';
import Photo from '../atoms/Photo';

const ProductInformationColumn = ({ product }) => {
  const { productName, price, image } = product;
  return (
    <div className="product-information-column grid grid-cols-5 gap-4">
      <div className="col-span-2 sm:col-span-2">
        <Photo src={image} alt={productName} />
      </div>
      <div className="col-span-3 sm:col-span-3">
        <h1 className="name">{productName}</h1>
        <p className="price">{comma(price)}원</p>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
