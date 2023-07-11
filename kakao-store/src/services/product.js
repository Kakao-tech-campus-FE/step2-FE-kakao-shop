import { instance } from "./index";

export const fetchProducts = (page = 0) => {
  // eslint-disable-next-line no-useless-concat
  return instance.get("/products" + "?page=" + page);
}

export const getProductById = (id) => {
  return instance.get("/products/" + id);
}
