import {instance} from "./index";

export const fetchProducts = (page = 0)=>{
    return instance.get("/products"+"?page="+page);
};

export const fetchProductFromCursor =(cursor)=>{
    return instance.get("/products"+"?cursor"+cursor);
}

export const getProductById =(id)=>{
    //에러인 경우를 먼저 위에서 확인해야함! (없는거 확인)
    if(!id){
        throw new Error("id가 없습니다.");
    }
    //정상 콜백은 마지막에
    return instance.get("/products/"+id);
};