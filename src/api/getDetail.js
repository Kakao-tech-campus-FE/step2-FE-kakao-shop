import instance from "./instance";

const getDetail = (id) => {
  return instance.get(`/products/${id}`);
};

export { getDetail };
