import instance from "./instance";

const addToCart = (postData) => {
  return instance.post(`/carts/add`, postData);
};

export default addToCart;
