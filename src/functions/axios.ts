import axios from "axios";
import { getAuth } from "@/functions/auth";
import { ERROR } from "@/assets/error.ko";
import { DefaultResDto } from "@/dtos/response.dto";

const https = axios.create({
  baseURL: import.meta.env.VITE_KAKAO_STORE_URL,
});

https.interceptors.request.use((config) => {
  const token = getAuth();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  config.headers["Content-Type"] = "application/json;charset=UTF-8";
  return config;
});

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
      console.error(error.response.data.error.message);
      alert(`${ERROR.UNKNOW_ERROR} ${ERROR.CONTECT_ADMIN}`);
      window.location.href = "/error/500";
      return;
    }

    if (error.response.status === 401) {
      console.error(resDto.error?.message);
      alert(ERROR.NOT_LOGIN);
      return;
    }
    if (error.response.status === 400) {
      console.error(resDto.error?.message);
      alert(resDto.error?.message);
    }

    console.error(resDto.error?.message);
    window.location.href = `/error/${resDto.error?.status}`;

    return error;
  }
);

export { https };
