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

    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
  `,
  Loader: styled.article`
    width: 100%;
    padding-bottom: 120px;

    display: grid;
    justify-content: center;
    align-items: center;

    grid-template-columns: repeat(3, 300px);
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
        width="100vw"
        time={2000}
        style={{ width: "100vw", position: "relative", left: "-5rem" }}
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
        </Styled.Grid>

        <Styled.Loader ref={loaderRef}>
          <ProductInfoCardLoader />
          <ProductInfoCardLoader />
          <ProductInfoCardLoader />
        </Styled.Loader>
      </Suspense>
    </GlobalTemplate>
  );
}

export default Home;
