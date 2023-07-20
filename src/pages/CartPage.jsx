import React from "react";
import { useQuery } from "react-query";
import cartInstance from "../apis/cart";

export default function CartPage() {
  const { isLoading, error, data } = useQuery(["carts"], cartInstance.getCart);

  if (isLoading) return <div>loading</div>;
  if (error) return <div>{error.message}</div>;
  console.log(data);
  return <div>CartPage</div>;
}
