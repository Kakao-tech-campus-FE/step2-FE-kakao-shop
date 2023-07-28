import OrderTemplate from "../Components/Templates/OrderTemplate";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import Loader from "../Components/Atoms/Loader";
import { getCart } from "../Servicies/cart";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();

  // const { data } = useQuery(["getcart"], () => getCart());
  const data = getCart();
  console.log(data);
  // if (!data) {
  //   alert("주문 가능한 상품이 없습니다!");
  //   navigate("/cart");
  // }

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <OrderTemplate data={data} />
      </div>
    </Suspense>
  );
};

export default OrderPage;
