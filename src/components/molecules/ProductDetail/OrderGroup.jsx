import React from "react";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import Icon from "../../atoms/Icon";
import { comma } from "../../../utils/convert";
import cartImage from "../../../assets/cart_white.png";

export default function OrderGroup({ optionList, onAddCart, onOrder }) {
  return (
    <>
      <Box className="flex justify-between py-3 text-lg font-semibold">
        <p>총 수량 {getAllCount(optionList)}개</p>
        <p>
          총 주문금액{" "}
          <span className="text-red-500 font-extrabold">
            {comma(getAllPrice(optionList))}
          </span>
          원
        </p>
      </Box>
      <Box className="flex justify-between pb-8">
        <Button padding="p-2" color="black" radius="sm" onClick={onAddCart}>
          <Icon alt="장바구니 담기" width="w-9" height="h-9">
            {cartImage}
          </Icon>
        </Button>
        <Button
          padding="px-16 py-3"
          font="semibold"
          color="yellow"
          radius="sm"
          onClick={onOrder}
        >
          톡딜가로 구매하기
        </Button>
      </Box>
    </>
  );
}

const getAllCount = (items) => {
  return items.reduce((pre, cur) => pre + cur.count, 0);
};
const getAllPrice = (items) => {
  return items.reduce((pre, cur) => pre + cur.price * cur.count, 0);
};
