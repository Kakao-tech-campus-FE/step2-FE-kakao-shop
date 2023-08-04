import CartsTemplate from "../components/templates/CartsTemplate";
import { useQuery } from "react-query";
import { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import { getCart } from "../services/cart";

const CartsPage = () => {
  const { data } = useQuery("carts", () => getCart());

  return (
    <Suspense fallback={<Loader />}>
      <div className="bg-gray-100">
        <CartsTemplate data={data} />
      </div>
    </Suspense>
  );
};

export default CartsPage;
