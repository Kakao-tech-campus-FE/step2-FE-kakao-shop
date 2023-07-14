import { instance } from "./index";

export const fetchProducts = (page = 0) => {
  return instance.get("/products" + "?page=" + page);
};

export const fetchProductFromCursor = (cursor) => {
  return instance.get("/products" + "?cursor=" + cursor);
};

export const getProductsById = (id) => {
  // if (!id) {
  //   throw Error("id가 없습니다");
  // }
  // console.log(instance.get("/products/" + id));
  return instance.get("/products/" + id);
};
