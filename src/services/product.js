import { instance } from './index'

export const fetchProducts = (url, page = 0) => {
  return instance.get(url+ "?page=" + page); 
}

export const getProductById = (id) => {

  return instance.get("products/"+id) 
}