import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { getProductspReq } from "apis/product.js";
import Container from "components/atoms/Container.js";
import ProductGrid from "components/organisms/ProductGrid.js";
import Loader from "components/atoms/Loader.js";
import Skeleton from "components/atoms/Skeleton";

export default function ProductSection() {
  const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ["products"],
      ({ pageParam = 0 }) => getProductspReq(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          if (lastPage.data.response.length === 0) return undefined;
          return allPages.length;
        },
        onError: (error) => {
          console.log("[Products Error]", error.message);
        },
        staleTime: Infinity,
      }
    );

  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isLoading && entry.isIntersecting && hasNextPage)
            fetchNextPage();
        });
      },
      { threshold: 1 }
    );
    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [observerRef, isLoading, hasNextPage, fetchNextPage]);

  return (
    <Container>
      {isLoading && <Loader />}
      {data && (
        <ProductGrid
          products={data.pages.flatMap((page) => page.data.response)}
        >
          {isFetchingNextPage && Array(9).fill(null).map(() => <Skeleton />)}
          <div ref={observerRef}></div>
        </ProductGrid>
      )}
    </Container>
  );
}
