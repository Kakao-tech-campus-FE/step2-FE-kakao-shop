import { instance } from "./index";

export const fetchProducts = (page = 0) => {
  return instance.get("/products" + "?page=" + page);
};

export const fetchProductFromCursor = (cursor) => {
  return instance.get("/products" + "?cursor=" + cursor);
};

export const getProductById = (id) => {
  // 에러 캐칭은 위에서
  if (!id) {
    throw Error("id가 필요합니다.");
  }

  // 정상 콜백은 맨 마지막에
  return instance.get("/products/" + id);
};
