import React from "react";
import Container from "../atoms/Container";
import ProductInformationColumn from "../molecules/ProductInformationColumn";
import OptionColumn from "../organisms/OptionColumn";

export default function ProductDetailTemplate({ product }) {
  return (
    <Container className=" flex justify-center w-full min-w-[1280px]">
      <ProductInformationColumn product={product}></ProductInformationColumn>
      <OptionColumn product={product}></OptionColumn>
    </Container>
  );
}
