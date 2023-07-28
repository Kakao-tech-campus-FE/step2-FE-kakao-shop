import instance from './index';
/**
 * 장바구니 모든 상품 주문
 * headers:{Authorization: `Bearer ${token}`} 형태로 정보전달
 */
export const order = () => {
  return instance.post('/orders/save');
};

export const getOrderFromId = (id) => {
  return instance.get(`/orders/${id}`);
};
