import React from "react";
import OrderTemplate from "../components/order/templates/OrderTemplate";
import Loader from "../components/common/atoms/Loader";
import { useQuery } from "react-query";
import { getCart } from "../apis/cart";

export default function OrderPage() {
  const { data, isLoading } = useQuery("cart", getCart);
  if (isLoading) return <Loader />;
  return <>{data && <OrderTemplate data={data.response} />}</>;
}
