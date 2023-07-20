import { instance } from "./index";

export const fetchProducts = (page = 0) => {
  return instance.get("/products" + "?page=" + page);
};

export const getProductById = (id) => {
  //에러 캐칭은 항상 위에서 해야함
  if (!id) {
    throw Error("id가 필요합니다.");
  }
  return instance.get(`/products/${id}`);
};
