import React from "react";
import { useQuery } from "react-query";
import Box from "../../atoms/Box";
import cartInstance from "../../../apis/cart";
import { filterCartData } from "../../../utils/convert";

export default function CartStatus() {
  const { error, data } = useQuery(["carts"], cartInstance.getCart);

  if (error) {
    return <div>{error.message}</div>;
  }
  const filteredData = filterCartData(data);
  return (
    <>
      {filteredData.length !== 0 ? (
        <Box className="absolute top-1 left-7 flex justify-center items-center w-5 h-5 text-white text-sm font-bold bg-red-500 rounded-full">
          <span>{filteredData.length}</span>
        </Box>
      ) : null}
    </>
  );
}
