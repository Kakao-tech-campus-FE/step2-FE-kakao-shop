import React from "react";
import Button from "../../atoms/Button";
import Box from "../../atoms/Box";
import Container from "../../atoms/Container";
import { comma } from "../../../utils/convert";

export default function PaymentInfo({ price, quantity }) {
  return (
    <section className="flex flex-col gap-2 bg-white">
      <Button padding="text-start px-5 py-3" border="border-y">
        <p className="text-lg font-extrabold">결제 정보</p>
      </Button>
      <Container className="flex flex-col gap-3 px-5 py-2 font-semibold">
        <Box className="flex justify-between text-sm">
          <p>
            상품금액 <span>({quantity}개)</span>
          </p>
          <span>{comma(price)}원</span>
        </Box>
        <Box className="flex justify-between mb-2 text-sm">
          <p>배송비</p>
          <span>0원</span>
        </Box>
        <Box className="flex justify-between py-3 text-lg font-bold border-t">
          <p>최종 결제금액</p>
          <span>{comma(price)}원</span>
        </Box>
      </Container>
    </section>
  );
}
