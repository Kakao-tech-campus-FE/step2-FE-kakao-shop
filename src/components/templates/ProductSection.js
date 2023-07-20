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
          let state;
          switch (error.response.status / 100) {
            case 3:
              state = "리다이렉션";
              break;
            case 4:
              state = "클라이언트";
              break;
            case 5:
              state = "서버";
              break;
            default:
              state = "기타";
          }
          console.log(
            `[Products Request Error] ${error.response.status}(${state}): ${error.message}`
          );
        },
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
          {isFetchingNextPage &&
            Array(9)
              .fill(null)
              .map(() => <Skeleton />)}
          <div ref={observerRef}></div>
        </ProductGrid>
      )}
    </Container>
  );
}
