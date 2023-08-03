import { instance } from "./index";

export const order = () => {
  return instance.post("/orders/save");
};

export const getOrderFromId = (id) => {
  return instance.get(`/orders/${id}`);
};
