import CartList from "../components/molecules/CartList";
import Loader from "../components/atoms/Loader";
import { Suspense } from "react";

const CartPage = () => {
  return (
    <div className="cartpage">
      <Suspense fallback={<Loader />}>
        <CartList />
      </Suspense>
    </div>
  );
};

export default CartPage;
