import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';
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
        <div style={{ display: 'flex' }}>
          {Array.from({ length: product.starCount }, (_, index) => (
            <AiTwotoneStar key={index} style={{ color: '#0343f4' }} />
          ))}
        </div>
        <h1 className="name font-bold text-xl">{productName}</h1>
        <div className="price">{comma(price)}원</div>
        <span className="bg-yellow-400 text-black px-2 py-2 rounded-full text-l">
          톡딜가 OOOO원 ~{' '}
        </span>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
