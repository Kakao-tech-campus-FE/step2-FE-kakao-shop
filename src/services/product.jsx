import { instance } from "./index";

export const fetchProducts = (page = 0) => {
  return instance.get("/products" + "?page=" + page);
};

export const getProducts = (id) => {
  return instance.get(`/products/${id}`);
};
