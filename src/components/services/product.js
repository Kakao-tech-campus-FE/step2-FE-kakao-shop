import { instance } from "./index"
const apiUrl = process.env.REACT_APP_API_URL;

export const fetchProducts = (page = 0) => {
  return instance.get(apiUrl + "/products" + "?page=" + page);
}

export const getProductById = (id) =>{
  if (!id) {
    throw Error("id가 필요합니다.");
  }

  return instance.get(apiUrl + "/products/" + id);
}