import { ProductInfoData } from '@api/dto';
import Photo from '@components/atoms/Photo';
import comma from '@utils/commaUtils';
import React from 'react';

interface ProductInformationColumnProps {
  product: ProductInfoData;
}
const ProductInformationColumn = ({ product }: ProductInformationColumnProps) => {
  const { productName, price, image } = product;
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
};

export default ProductInformationColumn;
