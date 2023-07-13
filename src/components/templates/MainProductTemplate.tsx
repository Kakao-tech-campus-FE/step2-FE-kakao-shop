import React, { Suspense, useEffect, useState } from 'react';
import { RootState, AppDispatch } from '@store/index';
import { useDispatch, useSelector } from 'react-redux';
import ProductGrid from '@components/organisms/ProductGrid';
import Loader from '@components/atoms/Loader';

import { getProducts } from '@store/slices/productSlice';

const MainPRoductTemplate = () => {
  const [page, setPage] = useState(0);
  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getProducts(page));
  }, [dispatch, page]);

  return (
    <Suspense fallback={<Loader />}>
      <ProductGrid products={products} />
    </Suspense>
  );
};

export default MainPRoductTemplate;
