import { KAKAO_API_BASEURL, createFetchInstance } from '../utils/fetch';

export const kakaoInstance = createFetchInstance(
  KAKAO_API_BASEURL,
  3000,
);
