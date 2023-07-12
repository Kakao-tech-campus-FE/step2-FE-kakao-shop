import { styled } from "styled-components";
import { useInfiniteQuery } from "react-query";
import { fetchProductsByPage } from "../../services/apis";
import ProductCard from "../molecules/ProductCard";
import ProductsLoader from "../atoms/ProductsLoader";
import { useEffect, useRef } from "react";

const Container = styled.main`
  margin-top: 20px;
`;

const ProductsList = styled.section`
  padding: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const ProductGrid = () => {
  const {
    isLoading,
    isFetching,
    data: products,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["products"],
    ({ pageParam = 0 }) => fetchProductsByPage({ page: pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => {
        console.log(allPages);
        if (lastPage?.data?.response.length === 0) {
          return undefined;
        }
        return allPages.length;
      },
      onError: (error) => {
        console.error("Failed to fetch products:", error);
        fetchNextPage();
      },
    }
  );

  const bottomObserverRef = useRef(null);

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
    };

    const io = new IntersectionObserver(handleObserver, {
      threshold: 1,
    });

    if (bottomObserverRef.current) {
      io.observe(bottomObserverRef.current);
    }

    return () => {
      io.disconnect();
    };
  }, [bottomObserverRef, fetchNextPage, hasNextPage]);

  return (
    <Container>
      {isLoading ? (
        <ProductsLoader />
      ) : (
        <ProductsList>
          {products.pages.map((page) =>
            page.data.response.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
          {isFetching ? (
            <ProductsLoader />
          ) : (
            <div ref={bottomObserverRef}></div>
          )}
        </ProductsList>
      )}
    </Container>
  );
};

export default ProductGrid;
