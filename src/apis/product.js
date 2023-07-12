import { instance } from "./instance.js";

export async function getProductspReq(page = 0) {
  return await instance.get(`/products?page=${page}`);
}

export async function getProductReq(id) {
  return await instance.get(`/product/${id}`);
}
