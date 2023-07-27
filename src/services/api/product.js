import {instance} from "./index"

// 상품 가져오기 - 페이지 별
export const fetchProducts = (page = 0) => {
  return instance.get("/products?page=" + page)
  .then(response =>  {
    // 요청 성공 시
    return response;
  })
  .catch(error => {
    console.error("Error fetching products: ", error);
    throw error;
  })
};

// 상품 가져오기 - 커서 이용(lastIndex)
// 이 프로젝트에서는 사용X API에서 cursor를 통한 요청이 구현되어있지 않기 때문
export const fetchProductsFromCursor = (cursor) => {
  return instance.get("/products?cursor=" + cursor);
};

// 상품 가져오기 - 아이디 별
export const getProductById = (id) => {
  // 에러 캐칭은 위에서
  // id가 없을 경우 요청을 보내지 않도록
  if (!id){
    throw Error("상품 id가 필요합니다.");
  }
  // 정상 콜백은 마지막으로
  return instance.get("/products/" + id)
  .then(response =>  {
    // 요청 성공 시
    return response;
  })
  .catch(error => {
    console.error("Error fetching product by id: ", error);
    throw error;
  })
};