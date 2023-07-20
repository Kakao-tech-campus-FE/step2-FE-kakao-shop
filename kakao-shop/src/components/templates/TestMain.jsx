import Container from '../atoms/Container';
import ProductGrid from '../organisms/ProductGrid';
import { Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import { fetchProducts } from '../../apis/product';
import Loader from '../atoms/Loader';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import _ from 'lodash';

const TestMain = () => {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [isEnd, setIsEnd] = useState(false);
  const bottomObserver = useRef(null);

  // const {
  //   data: productsData,
  //   fetchNextPage,
  //   hasNextPage,
  //   isFetching,
  //   isLoading,
  //   isError,
  //   error,
  // } = useInfiniteQuery(
  //   "products",
  //   ({ pageParam = 0 }) => fetchProducts(pageParam),
  //   {
  //     getNextPageParam: (lastPage, allPages) => {
  //       console.log("last:", lastPage, allPages);
  //       if (lastPage && lastPage.length < 9) {
  //         return undefined;
  //       }
  //       return allPages.length + 1;
  //     },
  //   }
  // );

  const {
    data: productsData,
    isLoading,
    isError,
    error,
  } = useQuery(
    ['/products', page], // Include page in the query key
    () => fetchProducts(page, isEnd),

    {
      keepPreviousData: true, // Keep previous data
    }
  );

  useEffect(() => {
    // console.log(productsData.flat());
    if (productsData) {
      console.log('length:', productsData.flat().length);
      productsData.flat().length < 9 && setIsEnd(true);
      setProducts(_.uniqBy([...products, ...productsData.flat()], 'id'));
    }
  }, [productsData]);

  const io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!isLoading && entry.isIntersecting && bottomObserver.current && !isEnd) {
          setPage((prev) => prev + 1);
        }
      });
    },
    {
      threshold: 1,
    }
  );

  useEffect(() => {
    bottomObserver.current && io.observe(bottomObserver.current);
  }, [bottomObserver.current, io]);

  useEffect(() => {
    console.log('page');
    console.log(page);
  }, [page]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container className="whitespace-break-spaces mx-auto w-5/6">
      <Suspense fallback={<Loader />}>
        {/* {isLoading ? <Loader /> : <ProductGrid products={products} />} */}
        <ProductGrid products={products} />
        <div ref={bottomObserver}></div>
      </Suspense>
    </Container>
  );
};

export default TestMain;
