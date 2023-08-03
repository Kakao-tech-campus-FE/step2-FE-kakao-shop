import instance from "./index";
import { getCookie } from "../store/slices/authSlice";

export const order = (items) => {
  return instance.post("/orders/save", items, {
    headers: {
      Authorization: getCookie("user"),
    },
  });
};

export const getOrderFromId = (id) => {
  return instance.get(`/orders/${id}`, {
    headers: {
      Authorization: getCookie("user"),
    },
  });
};
