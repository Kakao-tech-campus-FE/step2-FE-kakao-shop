import { useNavigate } from "react-router-dom";
import CartList from "../components/molecules/CartList";
import { Suspense, useEffect, useState } from "react";
import { getCart } from "../services/cart";
import React from "react";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";

//장바구니 페이지
const CartPage = () => {
  const { data, isLoading } = useQuery("cart", getCart);
  console.log(data);
  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <CartList data={data} />
    </Suspense>
  );
};

export default CartPage;
