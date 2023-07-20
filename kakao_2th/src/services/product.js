import instance from "./index";

export const fetchProducts = (page = 0) => {
    return instance.get("/products?page=" + page); // 백엔드 API와의 통신을 위한 GET 요청
};

export const getProductById = (id) => {
    if (!id) {
        throw Error("id가 필요합니다.");
    }
    return instance.get("/products/" + id); // 백엔드 API와의 통신을 위한 GET 요청
};

export const getProductList = (page = 0) => {
    return fetchProducts(page)
        .then((response) => response.data)
        .catch((error) => {
            throw Error("상품 목록을 가져오는 중에 오류가 발생했습니다.");
        });
};
