import instance from "./instance";

const getCarts = () => {
  return instance.get(`/carts`);
};

export default getCarts;
