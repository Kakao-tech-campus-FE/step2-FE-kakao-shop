import CartList from "../components/molecules/CartList";
import { Suspense } from "react";
import { getCart } from "../services/cart";
import React from "react";
import { useQuery } from "react-query";
import Loader from "../components/atoms/Loader";

//장바구니 페이지
const CartPage = () => {
  const { data } = useQuery("cart", getCart);

  return (
    <Suspense fallback={<Loader />}>
      <CartList data={data} />
    </Suspense>
  );
};

export default CartPage;
