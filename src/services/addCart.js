import {instance} from "./index"

/**
 * 장바구니 담기
 * @param {object} payload
 */
export const updateCart = (items) => {
    return instance.post("/carts/update", items);
}
export const getCart = () => {
    return instance.get("/carts");
} 

export const addCart=(payload)=>{

 return instance.post("/carts/add", payload);
}