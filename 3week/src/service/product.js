import { instance } from "./index"

export const fetchProducts = (page = 0) => {
  return instance.get(`/products?page=${page}`)
}

export const fetchProductFromCursor = (cursor) => {
  return instance.get(`/products?cursor=${cursor}`)
}

export const getProductById = (id) => {
  // JS에서는 에러 캐칭은 위에서 (위: false, 아래:true)
  if (!id) {
    throw Error("id가 필요합니다.")
  }
  // 정상 콜백은 맨 마지막에
  // 이렇게 안하면 코드가 너무 지저분해짐.
  return instance.get(`/products/${id}`)
}