import React from "react";
import Card from "../../common/atoms/Card";
import Text from "../../common/atoms/Text";
import { comma } from "../../../utils/convert";

export default function OrderOptionItem({ cart, productName, id }) {
  return (
    <Card
      className="border-1 flex flex-col border-solid border-zinc-50 p-5 text-black no-underline"
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
