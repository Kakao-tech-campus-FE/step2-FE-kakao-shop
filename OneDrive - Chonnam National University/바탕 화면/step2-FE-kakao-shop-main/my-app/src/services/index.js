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
// use는 middleware를 의미하는 경우가 많다
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
instance.interceptors.response.use(
  // 첫번째 인수는 정상, 두번째 인수는 에러
  (response) => {
    return response;
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
    const errorCode = error.response.status;
    if (errorCode >= 100 && errorCode <= 199) {
      throw new Error("100번대 상태 코드 수신: " + errorCode)
    } else if (errorCode >= 200 && errorCode <= 299) {
      throw new Error("200번대 상태 코드 수신: " + errorCode)
    } else if (errorCode >= 300 && errorCode <= 399) {
      throw new Error("300번대 상태 코드 수신: " + errorCode)
    } else if (errorCode >= 400 && errorCode <= 499) {
      throw new Error("400번대 상태 코드 수신: " + errorCode)
    } else {
      throw new Error("500번대 상태 코드 수신: " + errorCode)
    }
  }
);

// 백엔드 요청
export const register = (data) => {
  const { email, password, username } = data;
  return instance.post("/join", {
    email,
    password,
    username,
  });
};

export const checkEmail = (data) => {
  const email = data.email;
  return instance.post("/check", { email });
};

export const login = (data) => {
  const { email, password, username } = data; // eslint-disable-line no-unused-vars
  return instance.post("/login", {
    email,
    password,
  });
};