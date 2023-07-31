import CartList from "../components/molecules/CartList";
import Gnb from "../components/organisms/Gnb";
import Loader from "../components/atoms/Loader";
import NotFoundPage from "./NotFoundPage";
import { getCart } from "../services/cart";
import { useQuery } from "@tanstack/react-query";

const CartPage = () => {
  const { data, isLoading, isError } = useQuery(["carts"], getCart);

  return (
    <>
      <Gnb />
      {isLoading ? <Loader /> : <CartList data={data} />}
      {isError && <NotFoundPage />}
    </>
  );
};

export default CartPage;
