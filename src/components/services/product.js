import { instance } from "./index";

export const fetchProducts = (page = 0) => {
    // eslint-disable-next-line
    return instance.get("/products" + "?page=" + page);
}

export const getProductById = (id) => {
    // JS에서는 에러 핸들링을 위에 작성하는 것을 추천
    if(!id) {
        throw Error("id가 없습니다!");
    }

    return instance.get("/products/" + id);
} 