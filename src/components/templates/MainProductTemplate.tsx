import React, { Suspense } from 'react';
import { RootState } from '@store/index';
import { useSelector } from 'react-redux';
import ProductGrid from '@components/organisms/ProductGrid';
import Loader from '@components/atoms/Loader';

const MainPRoductTemplate = () => {
  const products = useSelector((state: RootState) => state.product.products);
  const loading = useSelector((state: RootState) => state.product.loading);
  const error = useSelector((state: RootState) => state.product.error);

  return (
    <Suspense fallback={<Loader />}>
      <ProductGrid products={products} />
    </Suspense>
  );
};

export default MainPRoductTemplate;
