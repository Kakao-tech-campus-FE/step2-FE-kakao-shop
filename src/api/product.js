import instance from "./index";

export const fetchProducts = (page = 0) => {
  // eslint-disable-next-line no-useless-concat
  return instance.get(`/products` + `?page=${page}`);
};

export const getProduct = (id) => {
  if (!id) {
    throw Error("id가 없습니다.");
  }

  return instance.get(`/products/${id}`);
};
