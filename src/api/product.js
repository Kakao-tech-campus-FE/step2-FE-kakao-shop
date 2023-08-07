import instance from "./instance";

export const getProducts = (p = 0) => {
  return instance.get(`/products?page=${p}`);
};

export const getDetail = (id) => {
  return instance.get(`/products/${id}`);
};
