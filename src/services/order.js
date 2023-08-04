import { instance } from '.';

/**
 * 장바구니에 있는 모든 상품 주문
 */
export const order = () => {
    console.log('hi');
    return instance.post('/orders/save');
};

export const getOrderFromId = (id) => {
    return instance.get(`/orders/${id}`);
};
