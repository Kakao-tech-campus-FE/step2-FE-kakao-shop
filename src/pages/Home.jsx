import { useEffect, useState } from "react";
import styled from "styled-components";

import GlobalTemplate from "@/components/templates/global-template/GlobalTemplate.jsx";
import ProductInfoCard from "@/components/organisms/product-info-card/ProductInfoCard.jsx";
import Carousel from "@/components/molecules/carousel/Carousel.jsx";
import CAROUSEL from "@/constants/CAROUSEL.js";
import productAPI from "@/api/productAPI.js";

const Styled = {
  Grid: styled.article`
    position: relative;
    left: -5rem;

    width: 100%;
    padding: 4rem 0 120px;

    display: grid;
    justify-content: center;
    align-items: center;

    grid-template-columns: repeat(3, 300px);
  `,
};

function Home() {
  const [productsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    const update = async () => {
      const { data } = await productAPI.getAllProducts({ pageIndex: 0 });
      setProductsInfo((prev) => [...prev, ...data.response]);
    };
    update();
    console.log("hello");
  }, []);

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
      <Styled.Grid>
        {productsInfo.map((info) => (
          <ProductInfoCard
            key={info.id}
            id={info.id}
            image={info.image}
            description={info.description}
            productName={info.productName}
            price={info.price}
          />
        ))}
      </Styled.Grid>
    </GlobalTemplate>
  );
}

export default Home;
