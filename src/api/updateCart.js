import instance from "./instance";

const updateCart = (updateList) => {
  return instance.post("/carts/update", updateList);
};

export default updateCart;
