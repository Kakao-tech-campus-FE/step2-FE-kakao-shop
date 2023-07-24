import { instance } from "./index";
export const fetchProducts = (page = 0) => {
    return instance.get('/products/' + '?page=' + page);
}

export const getProductById =(id) => {
    //id 존재하지 않을경우!
    if (!id) {
        throw Error("id가 없습니다.");
    }
    return instance.get('/products/' + id);
}