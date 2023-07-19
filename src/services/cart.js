import instance from "./api";

/**
 * 장바구니 담기
 * @param payload
 * @returns {Promise<axios.AxiosResponse<any>>}
 */
export const addCart = (payload) => {
    return instance.post("/carts/add", payload)
}
