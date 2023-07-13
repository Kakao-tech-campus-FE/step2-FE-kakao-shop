import axios from "axios";

// const emailReg = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
// const passwordReg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*-=])(?=.*[0-9]).{8,20}$/;

// AXIOS 인스턴스 선언
export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000, // 보다 나은 사용자 경험을 위해 timeout 추가
  headers: {
    "Content-Type": "application/json",
  },
});

// 인터셉터: 요청/응답을 보내거나 받기 전에 가로채서 처리하는 역할
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    // 여기서 요청을 취소할 수 없어 비워둠
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답에 대한 인터셉터 추가
// response.use는 middleware를 의미할 가능성이 높음
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // switch (error.response.status) {
    //   case 401:
    //     alert("로그인이 필요합니다");
    //     window.location.href = ("/login");
    //     break;
    //   case 400:
    //     return Promise.resolve(error.response);
    // }
    throw new Error(error.response.data.error.message);
  }
);
