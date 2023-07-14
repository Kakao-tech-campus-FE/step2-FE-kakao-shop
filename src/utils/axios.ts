import axios from 'axios';

export const KAKAO_API_BASEURL = process.env.REACT_APP_KAKAO_API_URL;

export function createAxiosInstance(
  baseURL: string | undefined,
  timeout: number,
) {
  const instance = axios.create({
    baseURL,
    timeout,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
}
