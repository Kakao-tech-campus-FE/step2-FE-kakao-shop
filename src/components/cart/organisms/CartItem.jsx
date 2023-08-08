import React from "react";
import Box from "../../common/atoms/Box";
import Card from "../../common/atoms/Card";
import { comma } from "../../../utils/convert";
import CartOptionItem from "../molecules/CartOptionItem";
import Text from "../../common/atoms/Text";

const staticServerUrl = process.env.REACT_APP_PATH || "";

export default function CartItem({ item, onChange }) {
  return (
    <>
      {item.carts.filter((cart) => cart.quantity > 0).length > 0 && (
        <Box className=" mt-3 flex flex-col gap-2 bg-white p-5">
          {/* Product Name */}
          <Box className="border-[1px] border-solid border-zinc-300 p-5">
            <Card
              className=" font-semibold text-black no-underline"
              to={staticServerUrl + `/product/${item.id}`}
            >
              {item.productName}
            </Card>
          </Box>
          {/* 선택 옵션 영역 */}
          {item.carts.map((cart) => (
            <CartOptionItem key={cart.id} cart={cart} onChange={onChange} />
          ))}
          {/* 상품 금액, 주문 금액 */}
          <Box className="border-[1px] border-solid border-zinc-300 bg-zinc-100 p-3 text-sm tracking-tighter">
            <Text className="flex justify-between">
              <span>
                상품금액(
                {item.carts.reduce((acc, cur) => {
                  return acc + cur.quantity;
                }, 0)}
                개)
              </span>
              <span>
                {comma(
                  item.carts.reduce((acc, cur) => {
                    return acc + cur.price;
                  }, 0),
                )}
                원
              </span>
            </Text>
            <Text className="flex justify-between font-bold">
              <span>주문금액</span>
              <span>
                {comma(
                  item.carts.reduce((acc, cur) => {
                    return acc + cur.price;
                  }, 0),
                )}
                원
              </span>
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
}
