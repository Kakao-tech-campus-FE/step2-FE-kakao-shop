import axios from 'axios';

export const kakaoPay = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_PAY_SERVER,
  timeout: 5000,
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_PAY_ADMIN_KEY}`,
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});
