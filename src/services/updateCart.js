import { authorizationInstance } from "./api";

export const updateCart = (items) => {
  return authorizationInstance.post("/carts/update", items);
};
