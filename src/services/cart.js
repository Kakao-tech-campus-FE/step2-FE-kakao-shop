import instance from "./index";

export const addCarts = (data) => {
  return instance.post("/carts/add", data);
};

export const getCart = () => {
  return instance.get("/carts");
};

export const updateCart = (items) => {
  return instance.post("/carts/update", items);
};
