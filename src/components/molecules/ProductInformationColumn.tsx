import { ProductInfoData } from '@api/dto';
import Photo from '@components/atoms/Photo';
import React from 'react';

interface ProductInformationColumnProps {
  product: ProductInfoData;
  setIsLoaded?: React.Dispatch<React.SetStateAction<boolean>>;
}
const ProductInformationColumn = ({ product, setIsLoaded }: ProductInformationColumnProps) => {
  const { productName, image } = product;
  return (
    <div className="w-[500px]">
      <Photo src={`${process.env.REACT_APP_API_URL}${image}`} alt={productName} setImgLoaded={setIsLoaded} />
    </div>
  );
};

export default ProductInformationColumn;
