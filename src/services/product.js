import { instance } from "./index";

export const fetchProducts = (page = 0) => {
    return instance.get("/products" + "?page=" + page);
};

export const getProductById = (id) => {
    console.log('getProductById(' + id + ")");
    // if (!!id) { // id가 없는 경우
    //     throw Error("id가 없습니다.");
    // }
    // return instance.get("/products/1");
    return instance.get("/products/" + id);
};

