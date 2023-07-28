import React from "react";
import Card from "../atoms/Card";
import Text from "../atoms/Text";
import { comma } from "../../utils/convert";

export default function OrderOptionItem({ cart, productName, id }) {
  return (
    <Card
      className="flex flex-col border-solid border-1 border-zinc-50 no-underline text-black p-3 tracking-tight"
      to={`/product/${id}`}
    >
      <Text className="text-sm font-bold">{productName}</Text>
      <Text className="text-sm">
        [옵션]{cart.option.optionName}, {comma(cart.quantity)}개
      </Text>
      <Text className="text-sm font-bold">{comma(cart.price)}원</Text>
    </Card>
  );
}
