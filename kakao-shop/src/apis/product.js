import { instance } from './index';

export const getAllProducts = async (page = 0, isEnd = false) => {
  if (isEnd) return []; // 마지막 데이터까지 불러왔으면 다음부턴 요청이 가지 않도록

  try {
    const response = await instance.get(`/products?page=${page}`);
    return response || [];
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
};

export const getProductById = (id) => {
  // js에서 에러캐칭은 반드시 위에서 다 처리. 정상 처리를 else에서 하지 않도록 한다.
  if (!id) {
    throw Error('id가 없습니다.');
  }

  // 정상 콜백은 맨 마지막에
  return instance.get(`/products/${id}`);
};
