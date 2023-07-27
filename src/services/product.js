import { instance } from './index';

export const fetchProducts = (page = 0) => {
  return instance.get('/products' + '?page=' + page);
};

export async function getProductById(id) {
  // 에러 캐칭은 위에서
  if (!id) {
    throw Error('상품 아이디가 없습니다.');
  }

  // 정상 콜백은 맨 마지막에
  return instance.get('/products/' + id);
}
