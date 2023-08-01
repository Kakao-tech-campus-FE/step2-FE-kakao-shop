import { useNavigate } from "react-router-dom";
import CartList from "../components/molecules/CartList";
import { Suspense, useEffect, useState } from "react";
import { getCart } from "../services/cart";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/atoms/Loader";

const CartPage = () => {
  const { data, status } = useQuery(["cart"], getCart);

  if (status === "loading") {
    return <Loader />;
  }
  if (status === "error") {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <Suspense fallback={<Loader />}>
      <CartList data={data} />
    </Suspense>
  );
};

export default CartPage;
