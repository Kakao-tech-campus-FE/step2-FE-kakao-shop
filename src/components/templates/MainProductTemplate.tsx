import React from 'react';
import { RootState } from '@store/index';
import { useSelector } from 'react-redux';
import ProductGrid from '@components/organisms/ProductGrid';

const MainPRoductTemplate = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const loading = useSelector((state: RootState) => state.product.loading);
  const error = useSelector((state: RootState) => state.product.error);

  return (
    <div>
      <ProductGrid products={products} />
    </div>
  );
};

export default MainPRoductTemplate;
