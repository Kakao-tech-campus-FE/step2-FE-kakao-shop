import { instance } from "./index";

export const fetchProducts = (page) => {
  return instance.get("/products" + "?page=" + page);
};

export const getProduct = (id) => {
  return instance.get(`/products/${id}`);
};
