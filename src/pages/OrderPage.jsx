import React, { useEffect } from "react";
import OrderTemplate from "../components/order/templates/OrderTemplate";
import Loader from "../components/common/atoms/Loader";
import { useQuery } from "react-query";
import { getCart } from "../apis/cart";

export default function OrderPage() {
  const { data, isLoading } = useQuery("cart", getCart);

  // 같은 layout을 사용하는 OrderPage와 CartPage에서 이동이라서 스크롤을 맨 위로 올림
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <Loader />;
  return <>{data && <OrderTemplate data={data.response} />}</>;
}
