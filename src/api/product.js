import instance from "./index";

export const fetchProducts = (page = 0) => {
  return instance.get(`/products?page=${page}`);
};

export const getProductById = (id) => {
  if (!id) {
    throw Error("해당 상품 id가 없습니다.");
  }

  return instance.get(`/products/${id}`);
};
