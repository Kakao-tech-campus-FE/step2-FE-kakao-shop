import instance from "./instance";

const getProducts = () => {
  return instance.get("/products");
};

export default getProducts;
