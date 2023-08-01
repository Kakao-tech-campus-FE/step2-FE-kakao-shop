import React from "react"; // eslint-disable-line no-unused-vars
import CartList from "../components/molecules/CartList";
import { Suspense } from "react";
import { getCart } from "../services/cart";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/atoms/Loader";

const CartPage = () => {
  const { data } = useQuery(["cart"], getCart);
  return (
    <Suspense fallback={<Loader />}>
      <CartList data={data} /> {/* 렌더링이 되기 전에 fallback에 해당하는 부분이 표기 */}
    </Suspense>
  );
};

export default CartPage;