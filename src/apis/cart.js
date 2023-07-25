import { instance } from "apis/instance.js";

export async function addCartReq(data) {
  return await instance.post("/carts/add", data);
}

export async function getCartReq(){
  return await instance.get("/carts");
}

export async function updateCartReq(data) {
  return await instance.post("/carts/update", data);
}