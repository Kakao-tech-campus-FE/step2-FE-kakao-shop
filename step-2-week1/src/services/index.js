import axios from "axios";

// 원래 api.js였는데 index.js로 이름 변경

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    // "Authorization": `Bearer ${localStorage.getItem('token')}`,

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
    console.log(error);
    return Promise.reject(error.response.data.error.message);
    
  }
);

export const duplicate = (data) => {
  const email = data;
  return instance.post("/check", {
    email,
  });
};




