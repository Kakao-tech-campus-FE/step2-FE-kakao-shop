import React from 'react';
import Container from '../atoms/Container';
import ProductInformationColumn from '../molecules/ProductInformationColumn';
import OptionColumn from '../molecules/OptionColumn';

const ProductDetailTemplate = ({ product }) => {
  return (
    <Container className="grid grid-cols-4 gap-10 px-0">
      <div className="col-span-3 sm:col-span-3 border-r-4">
        <ProductInformationColumn product={product} />
      </div>
      <div className="col-span-1 sm:col-span-1">
        <OptionColumn product={product} />
      </div>
    </Container>
  );
};

export default ProductDetailTemplate;
