import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import productInstance from "../apis/product";
import Container from "../components/atoms/Container";
import ProductInfoColumn from "../components/organisms/ProductInfoColumn";
import OptionColumn from "../components/organisms/OptionColumn";
import LoginModal from "../components/molecules/LoginModal";

export default function ProductDetailPage() {
  const { id } = useParams();
  const loginModalRef = useRef(null);
  const { error, data } = useQuery(["product"], () =>
    productInstance.getProductById(id)
  );

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <Container className="flex mx-auto w-inner">
      <ProductInfoColumn productData={data} />
      <OptionColumn productData={data} modalRef={loginModalRef} />
      <LoginModal ref={loginModalRef} />
    </Container>
  );
}
