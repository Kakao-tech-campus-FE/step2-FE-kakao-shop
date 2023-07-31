import { instance } from "./api";
import axios from "axios";

export const fetchProducts = (page = 0) => {
  return instance.get("/products" + "?page=" + page);
};

export const getProductById = (id) => {
  if (!id) {
    throw Error("id가 없습니다. ");
  }
  return instance.get("/products/" + id);
};

// export const getProductById = async (id) =>
//   await axios.get(`/products/${id}`).then((res) => res.data);
