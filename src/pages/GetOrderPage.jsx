import React from "react";
import OrderDone from "../components/templates/OrderDone";
import { getOrderFromId } from "../services/order";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const GetOrderPage = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery(["orders", id], () =>
    getOrderFromId(id)
  );

  const orderid = data?.data?.response.id;
  const totalPrice = data?.data?.response.totalPrice;
  const products = data?.data?.response.products;
  console.log(products);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <OrderDone
      orderData={orderid}
      totalPrice={totalPrice}
      products={products}
    />
  );
};

export default GetOrderPage;
