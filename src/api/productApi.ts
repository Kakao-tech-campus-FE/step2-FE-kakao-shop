import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    throw new Error();
  },
);

export const fetchProducts = (page = 0) => {
  return instance.get(`/products?page=${page}`);
};

export const getProductById = (id: number) => {
  // 에러 캐칭은 위에서
  if (!id) throw Error('id가 없습니다.');
  return instance.get(`/products/${id}`);
};
