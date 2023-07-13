import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   console.log(config);
//   console.log(token);
//   if (token) {
//     config.headers["Authorization"] = `Bearer ${token}`;
//   }
//   return config;
// });

// middleware 대부분 미들웨어는 use를 통해 선언.
// 두개의 파라미터 1. 정상작동 2. 에러날 경우 처리
instance.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response;
  },
  (error) => {
    // return Promise.reject(error.response);
    console.log("errrrrrrr", error);
    return Promise.reject(error);
  }
);
