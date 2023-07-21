import { getProducts } from "@apis/getProducts";
import ProductGrid from "@components/organisms/ProductGrid";
import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import InnerContainer from "@components/atoms/InnerContainer";
import { styled } from "styled-components";
import ProductGridSkeleton from "@components/organisms/ProductGridSkeleton";
import { useNavigate } from "react-router-dom";

const ProductTemplate = () => {
  const navigate = useNavigate();

  const { isLoading, data, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(["/products"], getProducts, {
      retry: false,
      getNextPageParam: (lastPage) => getNextParam(lastPage),
      onError: (err: any) => {
        if (err.status === 404) {
          navigate("/notFound");
        }
      },
    });

  const target = useRef<HTMLDivElement>(null);

  function getNextParam(lastPage: any) {
    if (lastPage.response.length < 9) {
      return undefined;
    }
    const res = lastPage.response;
    return Math.floor((res[res.length - 1].id - 1) / 9) + 1;
  }

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

  const observer = new IntersectionObserver(handleIntersect);

  useEffect(() => {
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
