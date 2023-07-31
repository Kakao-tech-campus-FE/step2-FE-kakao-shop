import instance from "./index";

export const ordersSave = () => {
  return instance.post("/orders/save");
};

export const ordersComplete = (id) => {
  return instance.get("/orders/" + id);
};
