import { styled } from "styled-components";
import { useInfiniteQuery } from "react-query";
import { fetchProductsByPage } from "../../services/apis";
import ProductCard from "../molecules/ProductCard";
import ProductsLoader from "../atoms/ProductsLoader";
import { useEffect, useRef } from "react";

const Container = styled.main`
  height: 500px;
  border: 2px solid red;
  position: relative;
`;

const ProductsList = styled.section`
  border: 10px solid green;
  padding: 10px;
  width: 100%;
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(3, 1fr);
`;

const ProductGrid = () => {
  const {
    isLoading,
    data: products,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["products"],
    ({ pageParam = 0 }) => fetchProductsByPage({ page: pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage?.data?.response.length === 0) {
          return undefined;
        }
        return allPages.length;
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
          <div style={{ height: "400px" }} ref={bottomObserverRef}></div>
        </ProductsList>
      )}
    </Container>
  );
};

export default ProductGrid;
