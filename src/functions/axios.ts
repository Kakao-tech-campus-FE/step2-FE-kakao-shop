import axios from "axios";
import { getAuth } from "@/functions/auth";
import { ERROR } from "@/assets/error.ko";
import { DefaultResDto } from "@/dtos/response.dto";

const https = axios.create({
  baseURL: process.env.VITE_KAKAO_STORE_URL,
});

https.interceptors.request.use((config) => {
  const token = getAuth();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  config.headers["Content-Type"] = "application/json;charset=UTF-8";
  return config;
});

/**
 * @description
 * 1. 500 에러 발생시, 에러 메시지를 콘솔에 출력하고, 사용자에게 알림을 띄운다.
 * 2. 401 에러 발생시, 사용자에게 서버에서 준 에러 메시지를 띄운다.
 * 3. 400 에러 발생시, 사용자에게 서버에서 준 에러 메시지를 띄운다.
 * 4. 404 에러 발생시, 사용자에게 서버에서 준 에러 메시지를 띄운다.
 *
 * # 상품을 찾을 수 없는 경우
 * 1. 상품을 찾을 수 없는 경우, 404 에러가 발생한다.
 */
https.interceptors.response.use(
  (response) => {
    const resDto = response.data as DefaultResDto;
    if (resDto.error) {
      window.location.href = "/error/" + resDto.error.status;
    }
    return response;
  },
  (error) => {
    const resDto = error.response.data as DefaultResDto;

    if (error.response.status === 500) {
      alert(`${ERROR.UNKNOW_ERROR} ${ERROR.CONTECT_ADMIN}`);
      console.error(resDto.error?.message);
      return error;
    }

    if (error.response.status === 401) {
      alert(resDto.error?.message);
      console.error(resDto.error?.message);
      return error;
    }
    if (error.response.status === 400) {
      alert(resDto.error?.message);
      console.error(resDto.error?.message);
      return error;
    }

    alert(resDto.error?.message);
    return error;
  }
);

export { https };
