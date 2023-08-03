import React, { useState } from "react";
import Counter from "../../molecules/Common/Counter";
import Box from "../../atoms/Box";
import Loader from "../../molecules/Common/Loader";
import Button from "../../atoms/Button";
import { comma } from "../../../utils/convert";
import useCart from "../../../hooks/useCart";
import useToasts from "../../../hooks/useToast";

export default function CartOptionItem({ item }) {
  const [isLoading, setIsLoading] = useState(false);
  const { updateCart } = useCart();
  const { showToast } = useToasts();

  const handleCartUpdate = (id, flag) => {
    setIsLoading(true);
    updateCart.mutate(getNextCart(id, item.quantity, flag), {
      onError: (error) => {
        showToast("잠시 후 다시 시도해주세요.", false);
        console.log(error);
      },
      onSettled: () => {
        setIsLoading(false);
      },
    });
  };
  return (
    <li className="relative mt-3 px-4 py-3 border rounded">
      <span className="text-sm text-gray-800 font-semibold">
        {item.option.optionName}
      </span>
      <Box className="flex justify-between items-center pt-3">
        <div className="flex">
          <Button
            margin="mr-3"
            padding="px-3"
            height="h-7"
            textsize="sm"
            color="white"
            radius="xs"
            border="border border-gray-300"
            onClick={() => handleCartUpdate(item.id, "delete")}
          >
            삭제
          </Button>
          <Counter
            count={item.quantity}
            id={item.id}
            onClick={handleCartUpdate}
          />
        </div>
        <span className="font-bold">
          {comma(item.option.price * item.quantity)}원
        </span>
      </Box>
      {isLoading && <Loader className="absolute top-0" height="h-full" />}
    </li>
  );
}

const getNextCart = (id, count, flag) => {
  let quantity;
  switch (flag) {
    case "minus": {
      quantity = count - 1;
      break;
    }
    case "plus": {
      quantity = count + 1;
      break;
    }
    default: {
      quantity = 0;
      break;
    }
  }
  return [
    {
      cartId: id,
      quantity,
    },
  ];
};
