import React, { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import CartList from "../components/molecules/CartList";

const CartPage = () => {
  return (
    <Suspense fallback={<Loader/>}> 
      <CartList/> 
    </Suspense>
  );
};

export default CartPage;

