import { instance } from "./index";

export const fetchProducts = (page = 0) => {
  // eslint-disable-next-line no-useless-concat
  return instance.get("/products" + "?page=" + page);
}

export const getProductById = (id) => {
  // 에러캐칭은 위에서
  if(!id) {
    throw Error("id가 없습니다.");
  }

  // 정상콜백은 밑에서
  return instance.get("/products/" + id);
}
