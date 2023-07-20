import React from "react";
import { useQuery } from "react-query";
import cartInstance from "../apis/cart";
import CartProducts from "../components/templates/CartProducts";
import Box from "../components/atoms/Box";
import { comma } from "../utils/convert";
import Button from "../components/atoms/Button";
import Container from "../components/atoms/Container";

export default function CartPage() {
  const { error, data } = useQuery(["carts"], cartInstance.getCart);

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-full py-8 bg-gray-100">
      <Container className="w-cart">
        <CartProducts products={data.products} />
        <Box className="flex justify-between w-full text-xl p-4 bg-white border-y">
          <strong>주문 예상 금액</strong>
          <span className="font-bold text-blue-500">
            {comma(data.totalPrice)}원
          </span>
        </Box>
        <Button
          width="w-full"
          padding="py-3"
          textsize="lg"
          font="bold"
          color="yellow"
        >
          주문하기
        </Button>
      </Container>
    </main>
  );
}
