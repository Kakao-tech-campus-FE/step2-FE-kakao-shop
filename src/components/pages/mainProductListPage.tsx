import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useProduct } from '../../hooks/query';
import MainProductListTemplate from '../templates/mainProductListTemplate';
import GlobalLoader from '../atoms/globalLoader';

export default function MainProductListPage() {
  const [pageIndex, setPageIndex] = useState(0);
  const {
    data, fetchNextPage, isFetching, isFetchingNextPage, hasNextPage,
  } = useProduct();
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
      {isFetching
        ? (
          createPortal(<GlobalLoader />, document.body)
        ) : null}
      <MainProductListTemplate
        ref={bottomObserverRef}
        products={data?.pages.flat()}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
}
