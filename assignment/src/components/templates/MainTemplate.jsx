import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../services/product';
import ProductGrid from '../organisms/ProductGrid';
import Loader from '../atoms/Loader';
import Button from '../atoms/Button';

const MainTemplate = () => {
  const [able, setAble] = useState(true);
  const [page, setPage] = useState(0);
  const { isLoading, isError, data, refetch } = useQuery(
    ['products'],
    () => fetchProducts(page),
    {},
  );

  const onNextPage = () => {
    if (able) {
      setPage((current) => current + 1);
      setAble(!able);
      refetch();
    }
  };
  const onPreviousPage = () => {
    if (!able) {
      setPage((current) => current - 1);
      setAble(!able);
      refetch();
    }
  };
  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <ProductGrid products={data?.data.response} error={isError} />
      <Button onClick={onPreviousPage} disabled={able}>
        Previous Page
      </Button>
      <Button onClick={onNextPage} disabled={!able}>
        Next Page
      </Button>
    </>
  );
};

export default MainTemplate;
