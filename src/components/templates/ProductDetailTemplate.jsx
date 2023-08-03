import OptionColumn from "../molecules/OptionColumn";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import Box from "../atoms/Box";
import Container from "../atoms/Container";
import { useState, useEffect } from "react";

const ProductDetailTemplate = ({ product }) => {
  // GNB 영역과 optionlist가 맞닿은 시점 부터 스크롤 되도록 함
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container className="flex justify-between w-screen h-screen ">
      <div
        className="grid grid-cols-2 gap-4 border "
        style={{ paddingBottom: "500px" }}
      >
        <div className="product-information-column relative left-40 mt-6  ">
          <ProductInformationColumn product={product} />
        </div>
        <div
          className="fixed optioncolumn right-40 border  bg-white z-20"
          style={{ top: `${Math.max(95, 179 - scrollPosition)}px` }}
        >
          <OptionColumn product={product} />
        </div>
      </div>
    </Container>
  );
};

export default ProductDetailTemplate;
