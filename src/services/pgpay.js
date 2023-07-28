import axios from "axios";

export const pginstance = axios.create({
  baseURL: "https://kapi.kakao.com",
  //process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    Authorization: `KakaoAK `,
  },
});

pginstance.interceptors.request.use((config) => {
  return config;
});

pginstance.interceptors.response.use();

export const pgpay = (pgc) => {
  return pginstance.post("/v1/payment/ready", pgc);
};
