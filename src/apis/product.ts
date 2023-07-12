import axios from 'axios';
import { ProductData } from '../types/product';

const axiosProductInstance = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_API_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function getProductList(pageIndex: number): Promise<ProductData[]> {
  const response = await axiosProductInstance.get(`/products?page=${pageIndex}`);

  return response.data.response;
}
