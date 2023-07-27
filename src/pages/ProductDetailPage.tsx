import React, { Suspense } from 'react';
import ProductDetailTemplate from '../components/templates/ProductDetailTemplate';
import Loader from '../components/atoms/Loader';

const ProductDetailPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ProductDetailTemplate />
    </Suspense>
  );
};

export default ProductDetailPage;
