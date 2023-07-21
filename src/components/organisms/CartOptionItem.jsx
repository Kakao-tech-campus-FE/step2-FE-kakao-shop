import React, { useState } from "react";
import Counter from "../molecules/Counter";
import { comma } from "../../utils/convert";
import Box from "../atoms/Box";
import { useMutation, useQueryClient } from "react-query";
import cartInstance from "../../apis/cart";
import Loader from "../molecules/Loader";
import Button from "../atoms/Button";

export default function CartOptionItem({ item }) {
  const [isLoading, setIsLoading] = useState(false);
  const { mutate } = useMutation({
    mutationFn: cartInstance.updateCart,
  });
  const queryClient = useQueryClient();

  const handleCartUpdate = (id, flag) => {
    setIsLoading(true);
    mutate(
      flag === "minus"
        ? [
            {
              cartId: id,
              quantity: item.quantity - 1,
            },
          ]
        : flag === "plus"
        ? [
            {
              cartId: id,
              quantity: item.quantity + 1,
            },
          ]
        : [
            {
              cartId: id,
              quantity: 0,
            },
          ],
      {
        onSuccess: async () => {
          await queryClient.invalidateQueries(["carts"]);
        },
        onSettled: () => {
          setIsLoading(false);
        },
      }
    );
  };
  return (
    <li className="relative mt-3 px-4 py-3 border rounded">
      <span className="text-sm text-gray-600 font-semibold">
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
