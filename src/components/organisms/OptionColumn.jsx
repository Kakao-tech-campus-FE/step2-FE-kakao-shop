import React from "react";
import OptionList from "./OptionList";
import DeliveryForm from "./DeliveryForm";
import Box from "../atoms/Box";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import cartImage from "../../assets/cart_white.png";

export default function OptionColumn({ productData }) {
  const { options } = productData;

  return (
    <section className="basis-1/3 border-l pl-8">
      <OptionList options={options} />
      <DeliveryForm />
      <Box className="flex justify-between py-3 font-semibold">
        <span>총 수량 0개</span>
        <span>총 주문금액 0원</span>
      </Box>
      <Box className="flex justify-between pb-8">
        <Button className="shrink-0" padding="p-2" color="black" radius="sm">
          <Icon alt="장바구니 담기" width="w-9" height="h-9">
            {cartImage}
          </Icon>
        </Button>
        <Button padding="px-16 py-3" font="semibold" color="yellow" radius="sm">
          톡딜가로 구매하기
        </Button>
      </Box>
    </section>
  );
}
