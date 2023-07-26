import { KAKAO_API_BASEURL, createFetchInstance } from '../utils/fetch';

export const kakaoUserInstance = createFetchInstance(
  KAKAO_API_BASEURL,
  3000,
);

export const kakaoShoppingInstance = createFetchInstance(
  KAKAO_API_BASEURL,
  3000,
);
