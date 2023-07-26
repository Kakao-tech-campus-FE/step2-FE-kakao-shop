import instance from "./index";
import { getCookie } from "../store/slices/authSlice";

export const addCart = (payload) => {
  return instance.post("/carts/add", payload, {
    headers: {
      Authorization: getCookie("user"),
    },
  });
};

export const updateCart = (payload) => {
  return instance.post("/carts/update", payload, {
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
