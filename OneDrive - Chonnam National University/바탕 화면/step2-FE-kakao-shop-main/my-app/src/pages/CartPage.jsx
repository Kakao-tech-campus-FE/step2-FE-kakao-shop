import React, { Suspense } from "react"; // eslint-disable-line no-unused-vars
import Loader from "../components/atoms/Loader";
import CartList from "../components/molecules/CartList";

const CartPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <CartList />
    </Suspense>
  );
};
export default CartPage;
