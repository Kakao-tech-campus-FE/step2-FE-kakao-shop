import { ProductInfoData } from '@api/dto';
import OptionColumn from '@components/molecules/OptionColumn';
import ProductInformationColumn from '@components/molecules/ProductInformationColumn';
import React from 'react';
import Card from '@components/atoms/Card';

interface ProductDetailTemplateProps {
  product: ProductInfoData;
}

const ProductDetailTemplate = ({ product }: ProductDetailTemplateProps) => {
  return (
    <Card>
      <div className="flex space-x-5 p-[30px]">
        <ProductInformationColumn product={product} />
        <OptionColumn product={product} />
      </div>
    </Card>
  );
};

export default ProductDetailTemplate;
