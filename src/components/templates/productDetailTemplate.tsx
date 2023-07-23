import { ProductInfoData } from '@api/dto';
import OptionColumn from '@components/molecules/OptionColumn';
import ProductInformationColumn from '@components/molecules/ProductInformationColumn';
import React from 'react';
import PhotoCard from '@components/atoms/PhotoCard';

interface ProductDetailTemplateProps {
  product: ProductInfoData;
}

const ProductDetailTemplate = ({ product }: ProductDetailTemplateProps) => {
  return (
    <PhotoCard>
      <div className="flex space-x-5 p-[30px]">
        <ProductInformationColumn product={product} />
        <OptionColumn product={product} />
      </div>
    </PhotoCard>
  );
};

export default ProductDetailTemplate;
