import { getCart } from "../../services/cart";
import { useQuery } from "react-query";
import Loader from "../atoms/Loader";
import { Suspense } from "react";
import CartList from "../organisms/CartList";
import { Helmet } from "react-helmet";

const CartPage = () => {
  const { data, isError, error } = useQuery("cart", getCart);
  return (
    <Suspense fallback={<Loader />}>
      <Helmet title={"카카오톡 쇼핑하기 - 장바구니"}></Helmet>
      <CartList data={data} />
      {isError && <div>{error.message}</div>}
    </Suspense>
  );
};

export default CartPage;
