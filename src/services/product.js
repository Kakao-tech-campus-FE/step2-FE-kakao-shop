import { instance } from "./index";

export const fetchProducts = (page = 0) => {
  return instance.get("/products" + "?page=" + page);
};
// export const fetchProducts = (page = 0) => {
//   const pageNumber = Number.isNaN(parseInt(page, 10)) ? 0 : parseInt(page, 10);
//   return instance.get(`/products?page=${pageNumber}`);
// };

export const getProductById = (id) => {
  if (!id) {
    throw Error("id가 필요합니다.");
  }
  return instance.get("/products/" + id);
};
