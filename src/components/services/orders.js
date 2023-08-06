import { instance } from "./index";

// 장바구니에 있는 모든 상품 주문
export const order = () => {
    return instance.post("/orders/save");
}

export const getOrderFromId = (id) => {
    return instance.get(`/orders/${id}`);
}