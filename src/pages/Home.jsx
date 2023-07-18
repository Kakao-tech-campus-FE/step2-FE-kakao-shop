import { Suspense, useEffect, useRef } from "react";
import styled from "styled-components";
import { ErrorBoundary } from "react-error-boundary";
import { Dna } from "react-loader-spinner";

import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import useGetInfiniteProductsQuery from "@/hooks/useGetInfiniteProductsQuery.js";

import GlobalTemplate from "@/components/templates/global-template/GlobalTemplate.jsx";
import Carousel from "@/components/molecules/carousel/Carousel.jsx";
import ProductInfoCard from "@/components/organisms/product-info-card/ProductInfoCard.jsx";
import ProductInfoCardLoader from "@/components/organisms/product-info-card/ProductInfoCard.loader.jsx";

import CAROUSEL from "@/constants/CAROUSEL.js";

const Styled = {
  Grid: styled.article`
    position: relative;
    left: -5rem;

    width: 100%;
    padding-top: 4rem;

    display: grid;
    justify-content: center;
    align-items: center;

    grid-template-columns: repeat(3, 300px);
  `,

  Loader: styled.article`
    position: relative;
    left: -5rem;

    width: 100%;
    padding-bottom: 120px;

    display: grid;
    justify-content: center;
    align-items: center;

    grid-template-columns: repeat(3, 300px);
  `,
};

function Home() {
  const observer = useIntersectionObserver(async () => {
    await fetchNextPage();
  });
  const loaderRef = useRef();
  const { data, fetchNextPage } = useGetInfiniteProductsQuery({
    observer,
    loaderRef,
  });

  useEffect(() => {
    const unobserve = observer.observe(loaderRef.current);
    return () => {
      observer && unobserve();
    };
  }, [loaderRef, observer]);

  return (
    <GlobalTemplate>
      <Carousel
        slideArray={CAROUSEL.SLIDE}
        dotButton
        arrowButton
        width="100vwr"
        time={2000}
        style={{ position: "relative", left: "-5rem" }}
      />
      <ErrorBoundary fallback={<div>api 통신 오류</div>}>
        <Suspense
          fallback={
            <Dna
              visible={true}
              ariaLabel="dna-loading"
              wrapperStyle={{ width: "100px", height: "100px" }}
              wrapperClass="dna-wrapper"
            />
          }
        >
          <Styled.Grid>
            {data?.pages.map((page) =>
              page.map((info) => (
                <Suspense key={info.id} fallback={<ProductInfoCardLoader />}>
                  <ProductInfoCard
                    key={info.id}
                    id={info.id}
                    image={info.image}
                    description={info.description}
                    productName={info.productName}
                    price={info.price}
                  />
                </Suspense>
              ))
            )}
          </Styled.Grid>

          <Styled.Loader ref={loaderRef}>
            <ProductInfoCardLoader />
            <ProductInfoCardLoader />
            <ProductInfoCardLoader />
          </Styled.Loader>
        </Suspense>
      </ErrorBoundary>
    </GlobalTemplate>
  );
}

export default Home;
