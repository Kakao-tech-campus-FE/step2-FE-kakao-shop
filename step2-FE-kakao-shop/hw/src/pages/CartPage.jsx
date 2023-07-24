import { useNavigate } from "react-router-dom";
import CartList from "../components/molecules/CartList";
import { Suspense, useEffect, useState } from "react";
import { getCart } from "../services/cart";
import React from "react";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";

// 장바구니 페이지
const CartPage = () => {
  const { data } = useQuery("cart", getCart);
  return (
    <Suspense fallback={<Loader />}>
      <CartList data={data} />{" "}
      {/* 렌더링이 되기 전에 fallback에 해당하는 부분이 표기 */}
    </Suspense>
  );
};

export default CartPage;
