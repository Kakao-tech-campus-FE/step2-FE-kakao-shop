import { instance } from "apis/instance.js";

export async function addCartReq(data) {
  const formattedData = data.map((item) => ({
    optionId: item.id,
    quantity: item.quantity,
  }));
  return await instance.post("/carts/add", formattedData);
}

export async function getCartReq(){
  return await instance.get("/carts");
}

export async function updateCartReq(data) {
  const formattedData = data.map((item) => ({
    cartId: item.id,
    quantity: item.quantity,
  }));
  return await instance.post("/carts/update", formattedData);
}