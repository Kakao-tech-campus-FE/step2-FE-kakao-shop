import { instance } from './index';

export const addCart = (payload) => {
    return instance.post("/carts/add", payload)
}

export const getCart = () => {
    return instance.get("/carts");
}

export const updateCart = (items) => {
    return instance.post("/carts/update", items)
}