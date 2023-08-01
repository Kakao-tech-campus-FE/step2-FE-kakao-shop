import { ProductInfoData } from '@api/dto';
import OptionColumn from '@components/molecules/OptionColumn';
import ProductInformationColumn from '@components/molecules/ProductInformationColumn';
import React, { useState } from 'react';
import Card from '@components/atoms/Card';
import ProductDetailTemplateSkeleton from './ProductDetailTemplateSkeleton';

interface ProductDetailTemplateProps {
  product: ProductInfoData;
}

const ProductDetailTemplate = ({ product }: ProductDetailTemplateProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Card>
      {isLoaded ? (
        <div className="flex space-x-5">
          <ProductInformationColumn product={product} />
          <OptionColumn product={product} />
        </div>
      ) : (
        <>
          <ProductDetailTemplateSkeleton />
          <div className="hidden">
            <ProductInformationColumn product={product} setIsLoaded={setIsLoaded} />
          </div>
        </>
      )}
    </Card>
  );
};

export default ProductDetailTemplate;
