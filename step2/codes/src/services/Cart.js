import { instance } from "./index";

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const addCart = async (payload) => {
    const token =localStorage.getItem("token")
    return await instance.post ("/carts/add", payload, {
        headers: {
            Authorization: `Bearer ${token}`, 
        },
    });
};

export const getCart = () => {
    return instance.get("/carts");
};

export const updateCart = (items) => {
    return instance.post("/carts/update", items);
};