import { Suspense, useEffect, useRef } from "react";
import styled from "styled-components";

import useIntersectionObserver from "@/hooks/useIntersectionObserver.js";
import useGetInfiniteProductsQuery from "@/hooks/useGetInfiniteProductsQuery.js";

import GlobalTemplate from "@/components/templates/global-template/GlobalTemplate.jsx";
import Carousel from "@/components/molecules/carousel/Carousel.jsx";
import ProductInfoCard from "@/components/organisms/product-info-card/ProductInfoCard.jsx";
import ProductInfoCardLoader from "@/components/organisms/product-info-card/ProductInfoCard.loader.jsx";
import Loader from "@/components/atoms/loader/Loader.jsx";

import CAROUSEL from "@/constants/CAROUSEL.js";

const Styled = {
  Grid: styled.article`
    width: 100%;
    padding-top: 4rem;

    display: grid;
    justify-content: center;
    align-items: flex-start;

    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 2rem;
  `,
  Loader: styled.article`
    width: 100%;
    padding: 4rem 0;

    display: grid;
    justify-content: center;
    align-items: center;

    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 2rem;
  `,
};

function Home() {
  const loaderRef = useRef(null);
  const observer = useIntersectionObserver(async () => {
    await fetchNextPage();
  });
  const { data, fetchNextPage } = useGetInfiniteProductsQuery({
    loader: loaderRef?.current,
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
        time={2000}
        style={{
          width: "100vw",
          position: "relative",
          left: "-4rem",
        }}
      />
      <Suspense fallback={<Loader />}>
        <Styled.Grid>
          {data?.pages.map((page) =>
            page.map((info) => (
              <ProductInfoCard
                key={info.id}
                id={info.id}
                image={info.image}
                description={info.description}
                productName={info.productName}
                price={info.price}
              />
            ))
          )}

          <Styled.Loader ref={loaderRef}>
            <ProductInfoCardLoader />
          </Styled.Loader>
        </Styled.Grid>
      </Suspense>
    </GlobalTemplate>
  );
}

export default Home;
