import ENDPOINT from '../constants/ENDPOINT';
import { instance } from './index';

export const fetchProducts = (page = 0) => {
    return instance.get(ENDPOINT.PRODUCTS, { params: { page: page } });
};

export const getProductById = (id) => {
    // 에러 캐칭은 위에서
    if (!id) {
        throw Error('id가 없습니다');
    }
    // 정상 콜백은 맨 마지막에
    return instance.get(`${ENDPOINT.PRODUCTS}/${id}`);
};
