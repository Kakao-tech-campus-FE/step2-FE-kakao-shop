import { ProductInfoData } from '@api/dto';
import Photo from '@components/atoms/Photo';
import React from 'react';

interface ProductInformationColumnProps {
  product: ProductInfoData;
}
const ProductInformationColumn = ({ product }: ProductInformationColumnProps) => {
  const { productName, image } = product;
  return (
    <div className="w-[1000px]">
      <Photo src={`${process.env.REACT_APP_API_URL}${image}`} alt={productName} />
    </div>
  );
};

export default ProductInformationColumn;
