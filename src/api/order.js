import instance from "./instance";

export const getOrders = (id) => {
  return instance.get(`/orders/${id}`);
};

export const postOrder = () => {
  return instance.post(`/orders/save`);
};
