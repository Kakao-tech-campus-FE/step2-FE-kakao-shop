import  instance  from "./index";

export const fetchProducts = () => {
  return instance.get("/products");
};

// cursor : 상품의 첫 페이지에서 가져오는 lastIndex
export const fetchProductFromCursor = (cursor) => {
  return instance.get("/products" + "?cursor=" + cursor);
}

export const getProductById = (id) => {
  if (!id) {
    throw Error("id가 없습니다.");
  }

  // id 존재x 경우
  return instance.get("/products/" + id);
}