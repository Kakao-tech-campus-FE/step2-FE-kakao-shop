import OrderTemplate from "../Components/Templates/OrderTemplate";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Loader from "../Components/Atoms/Loader";
import { getCart } from "../Servicies/cart";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const OrderPage = () => {
  const { data } = useQuery(["cart"], getCart);
  console.log("이것은 오더 데이터: " + data);

  return (
    <Suspense fallback={<Loader />}>
      <OrderTemplate data={data} />
    </Suspense>
  );
};

export default OrderPage;
