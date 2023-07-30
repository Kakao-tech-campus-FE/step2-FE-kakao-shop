import React, { Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/common/atoms/Loader";
import { useQuery } from "react-query";
import { getProductById } from "../apis/product";
import ProductDetailTemplate from "../components/productdetail/templates/ProductDetailTemplate";

export default function ProductDetailPage() {
  const { id } = useParams(); // useParams 객체는 동적 경로 매개변수 이름과 값 { id: '123' }
  const parsedId = parseInt(id);
  const { data, isLoading, error } = useQuery(`product/${id}`, () =>
    getProductById(parsedId)
  );

  const product = data;
  // data는 비동기 요청으로 처음에는 null이고, 요청이 완료되면 data에 데이터가 담김
  // product에 우리가 원하는 데이터가 정확하게 존재하느냐?
  // 검증 함수: data가 정확히 들어왔는지 체크, validate function

  const validateData = () => {
    if (!data) return false;
    const requiredKeys = [
      "id",
      "productName",
      "description",
      "image",
      "price",
      "starCount",
      "options",
    ];
    const keys = Object.keys(product); // ["id", "productName", "price", "image", "options"]
    for (const requiredKey of requiredKeys) {
      if (!keys.includes(requiredKey)) {
        alert(`product 객체에 ${requiredKey}가 존재하지 않습니다.`);
        return false;
      }
    }
    return true;
  };

  return (
    <div>
      {isLoading && <Loader />}
      {error && <div>{error.message}</div>}
      {product && <ProductDetailTemplate product={product} />}
    </div>
  );
}

// ⭐️ 개념
// - useQuery: 단일 비동기 요청
// - useQueries: 복수 비동기 요청(여러가지의 요청을 한 번에 보여줘야 할때 사용)
