import { cartsInstance } from "./index";

/**
 * 장바구니에 있는 모든 상품을 주문
 * header: {Authorization: `Bearer ${token}`}
 */
export const orderCart = ()=>{
    return cartsInstance.post("/orders/save")
  }
  export const getOrderById = (id)=> {
    return cartsInstance.get(`/orders/${id}`)
  }