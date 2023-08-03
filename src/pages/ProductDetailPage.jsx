import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Container from "../components/atoms/Container";
import ProductInfoColumn from "../components/organisms/ProductDetail/ProductInfoColumn";
import OptionColumn from "../components/organisms/ProductDetail/OptionColumn";
import LoginModal from "../components/molecules/Auth/LoginModal";
import productInstance from "../apis/product";

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
