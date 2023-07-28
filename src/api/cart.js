import instance from "./index";
import { getCookie } from "../store/slices/authSlice";

export const addCart = (items) => {
  return instance.post("/carts/add", items, {
    headers: {
      Authorization: getCookie("user"),
    },
  });
};

export const updateCart = (items) => {
  return instance.post("/carts/update", items, {
    headers: {
      Authorization: getCookie("user"),
    },
  });
};

export const getCart = () => {
  return instance.get("/carts", {
    headers: {
      Authorization: getCookie("user"),
    },
  });
};
