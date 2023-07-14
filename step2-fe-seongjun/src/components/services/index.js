import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000, // 무한대로 waiting 하지 않도록 timeout 세팅 필수
  headers: {
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  }
)

// middleware (use 사용)
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const errorNum = error.response.status;
    if (errorNum >= 300 && errorNum < 400) {
      throw new Error(`300번 대 오류 발생 : ${error.response.message}`)
    } else if (errorNum >= 400 && errorNum < 500) {
      throw new Error(`300번 대 오류 발생 : ${error.response.message}`)
    } if (errorNum >= 500 && errorNum < 600) {
      throw new Error(`300번 대 오류 발생 : ${error.response.message}`)
    } else {
      throw new Error(`에러 발생: ${error.response.message}`)
    }
    }                                                                                                                 
);


