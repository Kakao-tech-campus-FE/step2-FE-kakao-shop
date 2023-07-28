import { instance } from './index'

export const addCart = (items) => {
    return instance.post("./carts/add", items)
}

export const getCart = () => {
    return instance.get('/carts')
}

export const updateCart = (items) => {
    return instance.post("/carts/update", items)
}

//HTTP Method
//각 메서드마다 사용 방법, 목적이 다르다.
//GET: 데이터를 조회할 때 사용 + 보완이 필요가 없어야 함
//payload body가 존재하지 않음
//DELETE: 데이터를 삭제할 때 사용
//payload body가 존재하지 않음
//POST: 생성, 리턴되는 데이터를 암호화하여 전송
//PUT, PATCH: 수정(정석)