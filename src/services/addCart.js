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

// HTTP Method
// 각 메서드마다 사용 방법, 목적이 다르다.
// GET: 데이터를 조회할 때 사용 + 보안이 필요가 없어야 함, payload body가 존재하지 않음
// POST: 생성, 리턴되는 데이터를 암호화하여 전송
// PUT: 특정한 데이터에 대해서 수정
// PATCH: 데이터를 통째로 교체할 때 사용