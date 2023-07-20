import { instance } from "./instance.js";

export async function getProductspReq(page = 0) {
  return await instance.get(`/products?page=${page}`);
}

export async function getProductReq(id) {
  if (!id) throw new Error("getProductReq Error : ID 필요함");
  return await instance.get(`/product/${id}`);
}
