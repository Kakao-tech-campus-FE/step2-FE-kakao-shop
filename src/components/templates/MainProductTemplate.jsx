import React, { Suspense, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import ProductGrid from '../organisms/ProductGrid';
import Loader from '../atoms/Loader';
import NotFound from '../../pages/NotFound';
import { fetchProducts } from '../../services/product';
import PageButton from '../molecules/PageButton';

export default function MainProductTemplate() {
  const storedPage = sessionStorage.getItem('currentPage');
  const [page, setPage] = useState(storedPage ? parseInt(storedPage) : 0);

  const { isLoading, isError, error, data, refetch } = useQuery(
    ['products'],
    () => fetchProducts(page),
    { keepPreviousData: true }
  );

  const products = data?.data?.response;

  useEffect(() => {
    refetch();
    sessionStorage.setItem('currentPage', page);
  }, [page, refetch]);

  if (isError) {
    return <NotFound message={error.message} />;
  }

  return (
    <div className='w-[1280px] m-auto'>
      <h1 className='my-6 text-xl font-bold'>오늘의딜</h1>
      <Suspense fallback={<Loader />}>
        {data && (
          <Suspense fallback={<Loader />}>
            <ProductGrid products={products} />
            <PageButton page={2} setPage={setPage} />
          </Suspense>
        )}
      </Suspense>
    </div>
  );
}
