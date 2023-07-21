import { instance } from "./index";

/**
 * 전체 상품 목록 조회
 * @param {number} page 
 */
export const fetchProducts = (page = 0) => {
    return instance.get(`/products?page=${page}`);
};

/**
 * 개별 상품 상세 조회
 * @param {number} id 
 */
export const getProductById = (id) => {
    // if (!!id) { // id가 없는 경우
    //     throw Error("id가 없습니다.");
    // }
    return instance.get("/products/" + id);
};

