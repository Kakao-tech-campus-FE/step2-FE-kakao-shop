import { instance } from "./index"

export const addCart = (payload) => {
  return instance.post("/carts/add", payload)
}