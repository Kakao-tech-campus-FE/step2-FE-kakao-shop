import React, { useCallback, useEffect, useRef } from "react";
import { useInfiniteQuery } from "react-query";
import { fetchProducts } from "../apis/product";
import ProductGrid from "../components/organisms/ProductGrid";

export default function MainPage() {
  const bottomObserver = useRef(null);
  const { error, data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["/products"],
    ({ pageParam = 0 }) => fetchProducts(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length;
        return lastPage.length !== 0 ? nextPage : undefined;
      },
    }
  );

  const handleObserver = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        if (entry.isIntersecting && hasNextPage && bottomObserver.current) {
          fetchNextPage();
        }
      });
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const observerEl = bottomObserver.current;
    const io = new IntersectionObserver(handleObserver, { threshold: 1 });
    io.observe(observerEl);

    return () => io.unobserve(observerEl);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  if (error) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <div>
      <ProductGrid allProducts={data.pages} />
      <div ref={bottomObserver}></div>
    </div>
  );
}
