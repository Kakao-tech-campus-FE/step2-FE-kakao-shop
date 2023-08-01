import { instance } from ".";

/**
 * 장바구니에 있는 모든 상품을 주문
 * headers: {Authorization:`Bearer ${token}`}
 */
export const order =()=>{
    return instance.post('/orders/save');
}
export const getOrderFromId =(id)=>{
    return instance.post(`/orders/${id}`);
}