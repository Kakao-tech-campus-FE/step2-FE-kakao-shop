import { instance } from "./api";

export const fetchProducts = (page = 0) => {
    const products = instance.get(`/products?page=${page}`).then(response => response.data);
    return products;
}

export const fetchProductFromCursor = (cursor) => {
    return instance.get(`/product?cursor=${cursor}`);
}

export const getProductById = (id) => {
    if(!id) {
        throw Error("id가 없습니다");
    }

    return instance.get(`/products/${id}`);
}