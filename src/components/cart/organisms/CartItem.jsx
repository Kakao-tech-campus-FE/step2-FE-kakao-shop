import React from "react";
import Box from "../../common/atoms/Box";
import Card from "../../common/atoms/Card";
import { comma } from "../../../utils/convert";
import CartOptionItem from "../molecules/CartOptionItem";
import Text from "../../common/atoms/Text";

export default function CartItem({ item, onChange }) {
  return (
    <>
      {item.carts.filter((cart) => cart.quantity > 0).length > 0 && (
        <Box className=" bg-white mt-3 p-5 flex flex-col gap-2">
          {/* Product Name */}
          <Box className="border-[1px] border-solid p-5 border-zinc-300">
            <Card
              className=" no-underline text-black font-semibold"
              to={`/product/${item.id}`}
            >
              {item.productName}
            </Card>
          </Box>
          {/* 선택 옵션 영역 */}
          {item.carts.map((cart) => (
            <CartOptionItem key={cart.id} cart={cart} onChange={onChange} />
          ))}
          {/* 상품 금액, 주문 금액 */}
          <Box className="border-[1px] border-solid p-3 border-zinc-300 text-sm tracking-tighter bg-zinc-100">
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
                    return acc + cur.option.price * cur.quantity;
                  }, 0)
                )}
                원
              </span>
            </Text>
            <Text className="flex justify-between font-bold">
              <span>주문금액</span>
              <span>
                {comma(
                  item.carts.reduce((acc, cur) => {
                    return acc + cur.option.price * cur.quantity;
                  }, 0)
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
