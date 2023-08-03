import instance from './index';

// 상품을 가져오는 fetch API
// Page 형식
export const fetchProducts = async (page = 0) => {
  try {
    const response = await instance.get('/products?page=' + page);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
// id 존재여부에 대한 처리 필요함 => 백엔드에 불필요한 것들 방지
// 관례 : 에러에 대한 캐칭 : 맨위, 정상콜백 : 아래 / 이유 : if문이 지저문해짐

export const getProductById = (id) => {
  if (!id) {
    throw Error('id가 필요합니다.');
  }
  return instance.get(`/products/${id}`);
};
