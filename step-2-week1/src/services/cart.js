import { instance } from "./index";


export const addCart = (items) => {
    console.log(items);
    return instance.post("/carts/add", items);
    
};

export const getCart = () => {
    return instance.get("/carts");
} 

export const updateCart = (items) => {
    return instance.post("/carts/update", items);
}

