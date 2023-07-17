import { instance } from "./index"

export const fetchProducts = (pasge = 0) => {
  return instance.get("/")
}