import React, { Suspense } from 'react';
import { useQuery } from '@tanstack/react-query';
import Container from '../atoms/Container';
import ProductGrid from '../organisms/ProductGrid';
import Loader from '../atoms/Loader';
import { fetchProducts } from '../../services/product';

export default function MainProductTemplate() {
  const page = 0;
  const { isLoading, isError, data, refetch } = useQuery(
    ['products'],
    () => fetchProducts(page),
    {}
  );

  return (
    <div className='w-[1280px] m-auto'>
      <h1 className='my-6 text-xl font-bold'>오늘의딜</h1>
      <Suspense fallback={<Loader />}>
        {data && (
          <Suspense fallback={<Loader />}>
            <ProductGrid products={data?.data.response} />
          </Suspense>
        )}
      </Suspense>
    </div>
  );
}
