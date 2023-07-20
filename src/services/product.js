import { instance } from "./index";

export const fetchProducts = (page = 0) => {
  return instance.get("/products" + "?page=" + page);
};

export const fetchProductFromCursor = (cursor) => {
  return instance.get("/products" + "?cursor=" + cursor);
};

export const getProductsById = (id) => {
  return instance.get("/products/" + id);
};
