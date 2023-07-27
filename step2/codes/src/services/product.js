import { instance } from ".";

export const fetchProducts = (page = 0) => {
    return instance.get("/products?page=" + page)
};

// export const fetchProductFromCursor = (cursor) => {
//     return instance.get("/produts" + "?cursor=" + cursor)
// }

export const getProductById = (id) => {
    //id가 존재하지 않는 경우
    if(!id) {
        throw Error("id가 필요합니다.");
    }
    return instance.get("/products/" + id); 
};