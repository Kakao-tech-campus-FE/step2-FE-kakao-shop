import { instance } from "./index";

export const orderCart = () => {
  return instance.post("/orders/save");
};
export const getOrderById = (id) => {
  return instance.get(`/orders/${id}`);
};
