import instance from "./instance";

export const getOrders = () => {
  return instance.get(`/orders/1`);
};

export const postOrder = () => {
  return instance.post(`/orders/save`);
};
