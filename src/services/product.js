import instance from "./api";

export const fetchProductsByPage = (page) => {
    return instance.get(`/products?page=${page}`);
}

export const fetchProductFromCursor = (cursor) => {
    return instance.get(`/products?cursor=${cursor}`);
}

export const getProductById = (id) => {
    if (!id) {
        throw Error("id is null");
    }
    return instance.get("/products/"+id);
}