import instance from "./index";

export const fetchProducts = ( page=0 ) => {
  return instance.get("/products?page=" + page);
};

export const getProducts = (id) => {
  // 에러 캐칭
  if (!id) {
    throw Error("id가 필요합니다.")
  }
  
  return instance.get(`/products/${id}`);
};