import React, { Suspense, useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../../services/product';
import ProductGrid from '../organisms/ProductGrid';
import Loader from '../atoms/Loader';
import Button from '../atoms/Button';
import '../../styles/templates/maintemplate.css';

const MainTemplate = () => {
  const [able, setAble] = useState(true);
  const [page, setPage] = useState(0);
  const { isLoading, isError, data, refetch } = useQuery(
    ['products'],
    () => fetchProducts(page),
    { keepPreviousData: true, refetchWindowFocus: false },
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
      <div className="main-template">
        <ProductGrid products={data?.data.response} error={isError} />
        <div className="flex gap-4">
          <button
            className={`p-2 font-medium rounded-md ${
              !able ? 'bg-yellow-400 text-black' : 'bg-gray-40 text-gray-300'
            }`}
            onClick={onPreviousPage}
            disabled={able}
          >
            다음 페이지
          </button>
          <button
            className={`p-2 font-medium rounded-md ${
              able ? 'bg-yellow-400 text-black' : 'bg-gray-40 text-gray-300'
            }`}
            onClick={onNextPage}
            disabled={!able}
          >
            이전 페이지
          </button>
        </div>
      </div>
    </>
  );
};

export default MainTemplate;
