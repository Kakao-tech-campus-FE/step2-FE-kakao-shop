import axios from 'axios';

const KAKAO_API_BASEURL = process.env.REACT_APP_KAKAO_API_URL;

function createAxiosInstance(
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

export const kakaoUserInstance = createAxiosInstance(
  KAKAO_API_BASEURL,
  3000,
);

export const kakaoProductInstance = createAxiosInstance(
  KAKAO_API_BASEURL,
  3000,
);

export const kakaoCartInstance = createAxiosInstance(
  KAKAO_API_BASEURL,
  3000,
);
