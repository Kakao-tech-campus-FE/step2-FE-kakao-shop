import { instance } from "apis/instance.js";

export async function orderReq() {
  return await instance.post("/orders/save");
}

export async function getOrderResultReq(id) {
  if (!id) throw new Error("getProductReq Error : ID 필요함");
  return await instance.get(`/orders/${id}`);
}
