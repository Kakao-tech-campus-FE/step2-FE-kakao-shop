import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import productInstance from "../../apis/product";
import ProductInfoColumn from "../organisms/ProductInfoColumn";
import Container from "../atoms/Container";
import OptionColumn from "../organisms/OptionColumn";

export default function ProductDetail() {
  const { id } = useParams();
  const { error, data } = useQuery(["product"], () =>
    productInstance.getProductById(id)
  );

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <Container className="flex mx-auto w-inner">
      <ProductInfoColumn productData={data} />
      <OptionColumn productData={data} />
    </Container>
  );
}
