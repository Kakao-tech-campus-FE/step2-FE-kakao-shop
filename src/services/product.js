import { instance } from "./index";

const API_ENDPOINTS = {
  PRODUCTS: "/products",
  PRODUCT_BY_ID: (id) => `/products/${id}`,
};

export const fetchProducts = (page = 0) => {
  return instance.get(`${API_ENDPOINTS.PRODUCTS}?page=${page}`);
};

export const getProductById = (id) => {
  if (!id) {
    throw Error("id가 필요합니다.");
  }
  return instance.get(API_ENDPOINTS.PRODUCT_BY_ID(id));
};
