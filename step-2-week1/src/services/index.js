import axios from "axios";

// 원래 api.js였는데 index.js로 이름 변경

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",

  }
});


instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

// middleware
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // console.log(error.response.status);
    // console.log(error.response.data.error.message);
    // return Promise.resolve(error.response.data.error.message);
    // 주석 지워도 됨. 그저 예시
    // if (error.response.status === 400) {
    //   localStorage.removeItem("token");
    //   // window.location.href = "/login";
    //   return Promise.resolve();
    // }
    // return Promise.reject(error.response);
    return Promise.reject(error.response);
  }
);

export const duplicate = (data) => {
  const email = data;
  return instance.post("/check", {
    email,
  });
};




