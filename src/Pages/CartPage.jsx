import { Suspense } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Components/Atoms/Loader";
import CartList from "../Components/Molecules/CartList";
import { getCart } from "../Servicies/cart";
import React from "react";

//장바구니 페이지
const CartPage = () => {
  const { data } = useQuery(["cart"], getCart);

  return (
    <Suspense fallback={<Loader />}>
      <CartList data={data} />
    </Suspense>
  );
};

export default CartPage;
