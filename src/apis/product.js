import { instance } from './index';

export const fetchProducts = (page = 0) => {
  const result = instance
    .get(`/products?page=${page}`)
    .then((response) => response.data);
  console.log('result: ', result);
  return result;
};

export const getProductById = (id) => {
  if (!id) {
    throw Error('id가 없습니다.');
  }
  return instance.get(`/products/${id}`);
};
