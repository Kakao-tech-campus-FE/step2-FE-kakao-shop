import { useNavigate } from "react-router-dom";
import CartList from "../component/molecules/CartList";
import { Suspense, useEffect, useState } from "react";
import { getCart } from "../services/cart";
import React from "react";
import { useQuery } from "react-query";
import Loader from "../component/atoms/Loader";

const CartPage = () => {
  const { data: cart, isLoading } = useQuery(["cart"], getCart, {
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <Suspense fallback={<Loader />}>
      {isLoading ? <Loader /> : <CartList cart={cart} />}
    </Suspense>
  );
};

export default CartPage;
