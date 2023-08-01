import React from "react";
import Box from "../../atoms/Box";
import Container from "../../atoms/Container";

export default function ResultDelInfo({ address, request }) {
  return (
    <article>
      <Box className="flex justify-center p-4 border">
        <p className="font-semibold">배송 정보</p>
      </Box>
      <Container className="flex flex-col gap-2 px-8 py-4 text-[15px] border-x border-b">
        <Box className="flex">
          <span className="w-28 font-semibold">배송지</span>
          <span>{address}</span>
        </Box>
        <Box className="flex">
          <span className="w-28 font-semibold">배송요청사항</span>
          <span>{request}</span>
        </Box>
      </Container>
    </article>
  );
}
