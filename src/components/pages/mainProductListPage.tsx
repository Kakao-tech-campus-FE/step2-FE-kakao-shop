import { useEffect, useRef, useState } from 'react';
import { useProductList } from '../../hooks/query';
import MainProductListTemplate from '../templates/mainProductListTemplate';
import Loader from '../atoms/loader';

export default function MainProductListPage() {
  const [pageIndex, setPageIndex] = useState(0);
  const {
    data, fetchNextPage, isInitialLoading, isFetchingNextPage, hasNextPage,
  } = useProductList();
  const bottomObserverRef = useRef<HTMLDivElement>(null);

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (hasNextPage !== false && bottomObserverRef.current !== null) {
          io.unobserve(bottomObserverRef.current);
          setPageIndex((prev) => prev + 1);
        }
      }
    });
  }, {
    threshold: 1,
  });

  useEffect(() => {
    if (hasNextPage !== false && bottomObserverRef.current !== null) {
      fetchNextPage();
      io.observe(bottomObserverRef.current);
    }
  }, [pageIndex]);

  return (
    <>
      {isInitialLoading
        ? <Loader /> : null}
      <MainProductListTemplate
        ref={bottomObserverRef}
        products={data?.pages.flat()}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
}
