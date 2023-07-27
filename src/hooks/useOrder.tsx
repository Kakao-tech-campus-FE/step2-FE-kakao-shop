import { ProductOption } from "@/dtos/product.dto";
import { useState } from "react";

export interface Order extends ProductOption {
  quantity: number;
}

export const useOrder = () => {
  const [order, setOrder] = useState<Order[]>([]);
  const addOrder = (option: Omit<Order, "quantity">) => {
    setOrder((prev) => {
      if (prev.some((item) => item.id === option.id)) {
        return prev;
      }
      return [...prev, { ...option, quantity: 1 }];
    });
  };

  const removeOrder = (optinoId: number) => {
    setOrder((prev) => prev.filter((item) => item.id !== optinoId));
  };

  const updateOrder = (order: Order) => {
    setOrder((prev) =>
      prev.map((item) => {
        if (item.id === order.id) {
          return order;
        }
        return item;
      })
    );
  };

  const resetOrder = () => {
    setOrder([]);
  };

  return { order, addOrder, removeOrder, updateOrder, resetOrder };
};
