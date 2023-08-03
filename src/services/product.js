import {instance} from "./index";

export const fetchProducts = async (page = 0)=>{
    return await instance.get("/products?page="+page)
    .then(response =>  {
        // 요청 성공 시
        return response;
      })
      .catch(error => {
        console.error("상품을 가져올 수 없습니다. ", error);
        throw error;
      })
    };

export const fetchProductFromCursor =(cursor)=>{
    return instance.get("/products?cursor"+cursor);
}

export const getProductById =(id)=>{
    //에러인 경우를 먼저 위에서 확인해야함! (없는거 확인)
    if(!id){
        throw new Error("id가 없습니다.");
    }
    //정상 콜백은 마지막에
    return instance.get("/products/"+id)
    .then(response =>  {
        // 요청 성공 시
        return response;
      })
      .catch(error => {
        console.error("상품을 가져올 수 없습니다.", error);
        throw error;
      })
    };