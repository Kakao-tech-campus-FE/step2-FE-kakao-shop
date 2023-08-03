import instance from "./index";

export const fetchProductList = ( page=0 ) => {
  return instance.get(`/products?&page=${page}`);
};

export const getProduct = (id) => {
  return instance.get(`/products/${id}`);
};
