import React, { useEffect, useRef } from 'react';
import { useGetProductsQuery } from '../../apis/productApi';
import ProductGrid from '../organisms/ProductGrid';
import Container from '../atoms/Container';

const MainProductTemplate = () => {
  const bottomObserver = useRef(null);
  const { data, fetchNextPage, hasNextPage, isSuccess, isLoading, isFetching } = useGetProductsQuery();

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
    },
    {
      threshold: 1,
    },
  );

  useEffect(() => {
    if (!bottomObserver || !bottomObserver.current || !isSuccess) return;
    io.observe(bottomObserver.current);
  }, [isSuccess]);

  return (
    <Container className='pb-16 pt-8'>
      <ProductGrid isLoading={isLoading} isFetching={isFetching} pages={data?.pages} />
      <div ref={bottomObserver} className='h-20' />
    </Container>
  );
};

export default MainProductTemplate;
