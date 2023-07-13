import { instance } from "./index";

export const fetchProducts = (page = 0) => {
  return instance.get("/products" + "?page" + page);
};

export const getProductById = (id) => {
  // 에러 캐칭은 위에서!
  if (!id) {
    throw Error("id가 없습니다.");
  }
  return instance.get("/products/" + id);
};
