import instance from "./instance";

const getOrders = () => {
  return instance.get(`/orders/1`);
};

export default getOrders;
