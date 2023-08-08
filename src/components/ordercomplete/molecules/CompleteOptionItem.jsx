import React from "react";
import Text from "../../common/atoms/Text";
import Box from "../../common/atoms/Box";
import { comma } from "../../../utils/convert";

export default function CompleteOptionItem({ item, productName }) {
  return (
    <Box className="border-1 flex flex-col border-solid border-zinc-50 p-5 text-black no-underline">
      <Text className="text-sm font-bold">{productName}</Text>
      <Text className="text-sm">
        [옵션]{item.optionName}, {comma(item.quantity)}개
      </Text>
      <Text className="text-sm font-bold">{comma(item.price)}원</Text>
    </Box>
  );
}
