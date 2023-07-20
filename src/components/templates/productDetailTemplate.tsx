import { ProductInfoData } from '@api/dto';
import OptionColumn from '@components/molecules/OptionColumn';
import ProductInformationColumn from '@components/molecules/ProductInformationColumn';
import React from 'react';

interface ProductDetailTemplateProps {
  product: ProductInfoData;
}

const ProductDetailTemplate = ({ product }: ProductDetailTemplateProps) => {
  return (
    <>
      <ProductInformationColumn product={product} />
      <OptionColumn product={product} />
    </>
  );
};

export default ProductDetailTemplate;
