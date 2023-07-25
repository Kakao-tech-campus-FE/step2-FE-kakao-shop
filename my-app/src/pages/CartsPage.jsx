import CartsTemplate from "../components/templates/CartsTemplate";
import { useQuery } from "react-query";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import { getCart } from "../services/cart";
import { useSelector } from "react-redux";

const CartsPage = () => {
  const token = useSelector((state) => state.user.token);
  const { data } = useQuery("carts", () => getCart(token));

  return (
    <Suspense fallback={<Loader />}>
      <CartsTemplate data={data} />
    </Suspense>
  );
};

export default CartsPage;
