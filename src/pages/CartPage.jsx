import React, { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import { useQuery } from "react-query";
// import CartList from "../components/molecules/CartList";
import { getCart } from "../services/api/cart";
import ErrorTypo from "../components/atoms/ErrorTypo";

const CartList = React.lazy(() => import("../components/molecules/CartList"));

const CartPage = () => {
  const { data, isError } = useQuery("cart", getCart);
  return (
    <Suspense fallback={<Loader />}>
      {/* CartList에는 data.data.response.products만 전달하면 되는데
      왜 data를 통째로 전달했는가? 
      Suspense의 fallback으로 Loader를 사용하기 위하여
      data를 통째로 넘겨줘야 parsing이 되면서 data가 없을 때 Loader가 적용될 수 있다. */}

      {isError ? <ErrorTypo /> : <CartList data={data} />}
    </Suspense>
  );
};
export default CartPage;
