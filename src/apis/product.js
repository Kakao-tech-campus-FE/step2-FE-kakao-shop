import { instance } from "./index";

export const fetchProducts = (page = 0) => {
  return instance.get("/products" + "?page=" + page);
};

export const getProductById = (id) => {
  // 상품 id가 없을 경우 에러 캐칭
  if (!id) {
    throw Error("id가 필요합니다.");
  }
  return instance.get("/products/" + id);
};
