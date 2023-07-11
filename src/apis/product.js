import { instance } from "./index";

export const fetchProducts = async (page) => {
  const response = await instance.get(`/products?page=${page}`);

  return response.data.response;
};

export const getProductMyId = (id) => {
  return instance.get(`/products/${id}`);
};
