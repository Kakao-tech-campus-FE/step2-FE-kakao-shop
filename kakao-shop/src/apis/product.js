import { instance } from "./index"

export const fetchProducts = (page = 0) => {
    return instance.get("/products" + "?page=" + page);
}

export const getProductById = (id) => {
    // js에서 에러캐칭은 반드시 위에서 다 처리. 정상 처리를 else에서 하지 않도록 한다.
    if (!id) {
        throw Error("id가 없습니다.");
    }

    // 정상 콜백은 맨 마지막에
    return instance.get("/products/" + id)
}