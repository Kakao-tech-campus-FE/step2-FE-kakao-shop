import React, { useEffect, useRef, useState } from 'react';
import useGetProductsQuery from '../../apis/productApi';
import ProductGrid from '../organisms/ProductGrid';
import Container from '../atoms/Container';
import Loader from '../atoms/Loader';

const MainProductTemplate = () => {
  const MAX_PAGE = 1;
  const [page, setPage] = useState(0);
  const bottomObserver = useRef(null);
  const { data: products, isSuccess, isLoading } = useGetProductsQuery({ page });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && page < MAX_PAGE) {
          setPage((prev) => prev + 1);
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
      {isLoading && <Loader />}
      <div>{isSuccess && products && <ProductGrid products={products} />}</div>
      <div ref={bottomObserver} className='h-20' />
    </Container>
  );
};

export default MainProductTemplate;
