import {instance} from "./index"

// 상품 가져오기 - 페이지 별
export const fetchProducts = (page = 0) => {
  return instance.get("/products" + "?page=" + page);
};

// 상품 가져오기 - 아이디 별
export const getProductById = (id) => {
  // 에러 캐칭은 위에서
  // id가 없을 경우 요청을 보내지 않도록
  if (!id){
    throw Error("상품 id가 필요합니다.");
  }
  // 정상 콜백은 마지막으로
  return instance.get("/products/" + id);
};