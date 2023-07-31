import { instance, tokenInterceptor } from "./index";
import cookie from "react-cookies";

/**
 * 장바구니 담기
 * @param {Array} payload 
 */
export const addCart = (payload) => {
    console.log('addCart', payload);
    tokenInterceptor();
    return instance.post("/carts/add", payload);
}

/**
 * 장바구니 조회
 */
export const getCart = () => {
    const token = cookie.load('token');
    if(!token) {
        alert("로그인이 필요한 서비스입니다.");
        window.location.href="/login";
        return Promise.resolve();
    }
    tokenInterceptor();
    return instance.get("/carts");
}

/**
 * 장바구니 수정
 * @param {object} payload 
 */
export const updateCart = (payload) => {
    return instance.post("/carts/update", payload);    
}
