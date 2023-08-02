import React from "react";
import Container from "../components/atoms/Container";
import Box from "../components/atoms/Box";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";

export default function CanceledOrderPage() {
  const navigate = useNavigate();

  return (
    <main className="w-full h-full py-8 bg-gray-100">
      <Container className="flex flex-col justify-center items-center w-cart h-cart mx-auto text-center bg-white border-y">
        <Box className="py-3">
          <p className="text-lg font-semibold">
            주문이 실패하였습니다.
            <br />
            확인 후 다시 시도해주세요.
          </p>
          <p className="py-2 text-sm text-gray-400">결제가 중단되었습니다.</p>
        </Box>
        <Box className="flex gap-4">
          <Button
            padding="px-5 py-2"
            color="white"
            radius="xs"
            border="border"
            onClick={() => navigate("/order")}
          >
            다시 주문
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
    </main>
  );
}
