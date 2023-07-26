import { useNavigate } from "react-router-dom";
import CartList from "../components/organisms/CartList";
import { Suspense, useEffect, useState } from "react";
import { getCart } from "../services/getCart";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../components/atoms/Loader";

const CartPage = () => {
  const { data } = useQuery("carts", getCart);

  return (
    <Suspense fallback={<Loading />}>
      <CartList data={data}></CartList>
    </Suspense>
  );
};

export default CartPage;
