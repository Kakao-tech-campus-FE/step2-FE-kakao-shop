// import { useQuery } from "react-query";
import { instance } from "./api";

export const fetchProducts = (page = 0) => {
  return instance.get("/products" + "?page=" + page);
};

export const getProductById = (id) => {
  if (!id) {
    throw Error("id가 없습니다. ");
  }
  return instance.get("/products/" + id);
};

//-----------------------------
// react-query

// export const fetchProducts = (page = 0) => {
//   return instance.get("/products" + "?page=" + page);
// };

// export const useProducts = (page = 0) => {
//   return useQuery(["products", page], () => fetchProducts(page));
// };
// export const useProductById = (id) => {
//   if (!id) {
//     throw Error("id가 없습니다. ");
//   }
//   return useQuery(["product", id], () => instance.get("/products/" + id));
// };
