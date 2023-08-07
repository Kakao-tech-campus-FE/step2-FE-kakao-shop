import instance from "./api";

export const order = (order) => {
  return instance.post("/orders/save", order);
};

export const getOrderFromId = (id) => {
  return instance.get(`/orders/${id}`);
};
