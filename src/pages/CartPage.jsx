import React from "react";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
import { getCart } from "../apis/cart";
import CartTemplate from "../components/templates/CartTemplate";

export default function CartPage() {
  const { data, isLoading } = useQuery("cart", getCart);

  return <>{isLoading ? <Loader /> : <CartTemplate data={data} />}</>;
}

// Suspense란?
// - fallback: fallback props로 전달된 컴포넌트는 서버로부터 데이터를 받아오는 동안에 보여줄 컴포넌트를 지정
