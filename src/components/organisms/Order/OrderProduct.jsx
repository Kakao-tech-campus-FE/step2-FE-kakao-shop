import React from "react";
import { FiTruck } from "react-icons/fi";
import OrderProductItem from "../../molecules/Order/OrderProductItem";
import Box from "../../atoms/Box";

export default function OrderProduct({ product }) {
  return (
    <li className="bg-white border-y">
      <ul className="px-5">
        {product.carts.map((cart, index) => (
          <OrderProductItem
            key={cart.id}
            cartItem={cart}
            productId={product.id}
            productName={product.productName}
            border={product.carts.length !== index + 1}
          />
        ))}
      </ul>
      <Box className="flex justify-center items-center gap-2 py-3 text-blue-500 border-t">
        <FiTruck className="text-lg" />
        <span>무료배송</span>
      </Box>
    </li>
  );
}
