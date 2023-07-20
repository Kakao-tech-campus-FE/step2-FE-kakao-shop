import { instance } from "./index";

export const fetchProducts = (page = 0) => {
  return instance.get(`/products?page=${page}`);
};

export const getProductById = (id) => {
  // 자바스크립트는 위에서 에러캐칭을 하고
  if (!id) {
    throw Error("id가 필요합니다.");
  }

  // 정상처리가 아래쪽
  return instance.get(`/products/${id}`);
};
