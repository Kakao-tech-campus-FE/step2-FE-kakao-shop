import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/common/atoms/Loader";
import { useQuery } from "react-query";
import { getProductById } from "../apis/product";
import ProductDetailTemplate from "../components/productdetail/templates/ProductDetailTemplate";

export default function ProductDetailPage() {
  const { id } = useParams(); // useParams 객체는 동적 경로 매개변수 이름과 값 { id: '123' }
  const parsedId = parseInt(id);
  const { data, isLoading } = useQuery(`product/${id}`, () =>
    getProductById(parsedId),
  );
  const product = data;

  if (isLoading) return <Loader />;
  return <div>{product && <ProductDetailTemplate product={product} />}</div>;
}

// ⭐️ 개념
// - useQuery: 단일 비동기 요청
// - useQueries: 복수 비동기 요청(여러가지의 요청을 한 번에 보여줘야 할때 사용)
