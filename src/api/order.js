import instance from "./instance";

export const getOrders = (id) => {
  return instance.get(`/orders/${id}`);
};

export const saveOrder = () => {
  return instance.post(`/orders/save`);
};
