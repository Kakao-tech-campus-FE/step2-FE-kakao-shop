import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { getProductspReq } from "apis/product.js";

import ProductsGrid from "components/organisms/ProductsGrid.js";
import Skeleton from "components/atoms/Skeleton.js";
import Carousel from "components/atoms/Carousel.js";

import carouselImage1 from "assets/carousel/carouselItem1.jpeg";
import carouselImage2 from "assets/carousel/carouselItem2.jpeg";
import carouselImage3 from "assets/carousel/carouselItem3.jpeg";

export default function ProductSections() {
  const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam = 0 }) => getProductspReq(pageParam),
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.data.response.length === 0) return undefined;
        return allPages.length;
      },
      onError: (error) => {
        const states = { 3: "리다이렉션", 4: "클라이언트", 5: "서버" };
        const state = states[error.response.status / 100];
        console.log(
          `[Products Request Error] ${error.response.status}(${state}): ${error.message}`
        );
      },
    });

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
    <>
      <Carousel images={[carouselImage1, carouselImage2, carouselImage3]} />
      <ProductsGrid products={data.pages.flatMap((page) => page.data.response)}>
        {isFetchingNextPage &&
          Array(9)
            .fill(null)
            .map((_, index) => <Skeleton key={index} />)}
        <div ref={observerRef}></div>
      </ProductsGrid>
    </>
  );
}
