import instance from "./instance";

export const addToCart = (postData) => {
  return instance.post(`/carts/add`, postData);
};

export const getCarts = () => {
  return instance.get(`/carts`);
};

export const postOrder = () => {
  return instance.post(`/orders/save`);
};

export const updateCart = (updateList) => {
  return instance.post("/carts/update", updateList);
};
