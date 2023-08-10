import React from 'react';
import { comma, staticUrl } from '../../utils/convert';

interface ProductInformationColumnProps {
  image: string;
  price: number;
  productName: string;
}

const ProductInformationColumn = ({ image, price, productName }: ProductInformationColumnProps) => {
  return (
    <div className='flex h-full w-[890px] p-7'>
      <img width={430} height={430} src={staticUrl(image)} alt={productName} />
      <div className='ml-7 w-[430px] text-2xl'>
        <h1>{productName}</h1>
        <strong>{comma(price)}원</strong>
      </div>
    </div>
  );
};

export default ProductInformationColumn;
