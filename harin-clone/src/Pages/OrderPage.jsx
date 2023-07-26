import OrderTemplate from "../Components/Templates/OrderTemplate";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Loader from "../Components/Atoms/Loader";
import { getCart } from "../Servicies/cart";

const OrderPage = () => {
  const { data, error, isLoading } = useQuery("cart", getCart);

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <OrderTemplate data={data} />
      </div>
    </Suspense>
  );
};

export default OrderPage;
