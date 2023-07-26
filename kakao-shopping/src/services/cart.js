import { instance } from "./api";

export const addCart = (payload) => {
    console.log(payload);
    return instance.post("carts/add", payload);
};

export const getCart = () => {
    return instance.get("carts");
};

export const updateCart = (payload) => {
    console.log(payload);
    return instance.post("carts/update", payload);
};
