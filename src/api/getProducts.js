import instance from "./instance";

const getProducts = (p = 0) => {
  return instance.get(`/products?page=${p}`);
};

export default getProducts;
