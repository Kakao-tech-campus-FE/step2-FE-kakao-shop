import { instance } from "./api";

export const fetchProducts = async ({ pageParam = 0 }) => {
    const dat = await instance.get("/products" + "?page=" + pageParam);
    return { ...dat, page: pageParam };
};

export const getProductById = async (id) => {
    if (!id) {
        // 에러 처리
        throw Error("id가 필요합니다.");
    }
    const wait = (delay) =>
        new Promise((resolve) => setTimeout(resolve, delay));
    await wait(10000);
    return instance.get("/products/" + id);
};
