import React from "react";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Box from "../../atoms/Box";
import Container from "../../atoms/Container";
import Button from "../../atoms/Button";

export default function NullCart() {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center items-center w-cart h-cart bg-white border-y">
      <Container className="text-center">
        <BsCart2 className="mx-auto text-5xl text-gray-300" />
        <p className="py-3 text-lg font-semibold">
          장바구니에 담긴 상품이 없습니다.
        </p>
        <Box className="flex justify-around">
          <Button
            padding="px-5 py-2"
            color="white"
            radius="xs"
            border="border"
            onClick={() => navigate(-1)}
          >
            이전 화면
          </Button>
          <Button
            padding="px-5 py-2"
            color="black"
            radius="xs"
            onClick={() => navigate("/")}
          >
            쇼핑하기 홈
          </Button>
        </Box>
      </Container>
    </section>
  );
}
