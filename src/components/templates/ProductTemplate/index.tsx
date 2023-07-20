import { getProducts } from "@apis/getProducts";
import ProductGrid from "@components/organisms/ProductGrid";
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import InnerContainer from "@components/atoms/InnerContainer";
import { styled } from "styled-components";
import ProductGridSkeleton from "@components/organisms/ProductGridSkeleton";

const ProductTemplate = () => {
  const { isLoading, data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(["/products"], getProducts, {
      getNextPageParam: (lastPage) => {
        if (lastPage.response.length < 9) {
          return undefined;
        } else {
          const res = lastPage.response;
          const nextParam = Math.floor((res[res.length - 1].id - 1) / 9) + 1;
          return nextParam;
        }
      },
      onError: (err) => {
        console.log(err);
      },
    });

  const target = useRef<HTMLDivElement>(null);

  const handleIntersect = async (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      if (hasNextPage) {
        await fetchNextPage();
      }
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect);
    target.current && observer.observe(target.current);

    return () => observer && observer.disconnect();
  }, [target, data]);

  return (
    <div>
      <InnerContainer>
        <Wrapper>
          <Tap>
            <span>오늘의 딜</span>
          </Tap>
          {isLoading ? (
            <ProductGridSkeleton />
          ) : (
            <>
              <GridWrapper>
                {data?.pages.map((page, index) => {
                  return <ProductGrid key={index} products={page.response} />;
                })}
              </GridWrapper>
              {isFetchingNextPage && <ProductGridSkeleton />}
              {hasNextPage && <div ref={target}></div>}
            </>
          )}
        </Wrapper>
      </InnerContainer>
    </div>
  );
};

export default ProductTemplate;

const Wrapper = styled.div`
  margin-top: 80px;
`;

const Tap = styled.div`
  height: 24px;
  padding: 30px 1px 30px;

  span {
    position: relative;
    font-size: 20px;
    line-height: 24px;
    color: #333;
    font-weight: 700;

    &::before {
      content: "";
      position: absolute;
      top: 24px;
      left: 0;
      right: 0;
      height: 3px;
      background-color: #fff13f;
    }
  }
`;

const GridWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
