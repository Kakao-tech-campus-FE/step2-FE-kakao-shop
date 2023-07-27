import React from 'react';
import ProductInformationColumn from '../molecules/ProductInformationColumn';
import OptionColumn from '../molecules/OptionColumn';

export default function ProductDetailTemplate({ product }) {
  return (
    <div className=''>
      <div className=''>
        <ProductInformationColumn product={product} />
      </div>
      <div className=''>
        <OptionColumn product={product} />
      </div>
    </div>
  );
}
