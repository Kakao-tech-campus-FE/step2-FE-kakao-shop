import { instance } from "./index";

export const fetchProducts = (page = 0) => {
  return instance.get("/products" + "?page=" + page);
};

export const getProductById = (id) => {
  // 에러 케이스는 윗단에서 확인
  if (!id) {
    throw Error("id가 필요합니다.");
  }

  // 정상 콜백은 마지막단에서 확인
  return instance.get("/products/" + id);
};