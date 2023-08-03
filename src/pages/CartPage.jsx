import React, { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import CartList from "../components/molecules/CartList";

const CartPage = () => {
  return (
    <div className="my-8 max-w-screen-xl">
      <Suspense fallback={<Loader />}>
        <CartList />
      </Suspense>
    </div>
  );
};

export default CartPage;
