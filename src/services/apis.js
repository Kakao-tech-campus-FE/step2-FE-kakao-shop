import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 이 코드가 있으면 로그인 상태에서 /products에 get요청을 못함
// instance.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers["Authorization"] = token;
//   }
//   return config;
// });

export const fetchProductsByPage = ({ page }) => {
  return instance.get(`/products?page=${page}`);
};
