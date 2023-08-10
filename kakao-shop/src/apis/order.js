import { instance } from "./index";

export const saveOrder = (order) => {
  return instance.post("/orders/save", order);
};

export const getOrders = (id) => {
  return instance.get(`/orders/${id}`);
};
