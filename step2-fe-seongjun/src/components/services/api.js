import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000, // 무한대로 waiting 하지 않도록 timeout 세팅 필수
  headers: {
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
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

  }                                                                                                                 
);

// 회원가입 요청
export const register = (data) => {
  const {email, password, username} = data;
  return new Promise((resolve, reject) => {
    instance.post("/join", { //baseURL/join
      email, 
      password,
      username,
    })
    .then((response) => {
      resolve(response.data); // 응답 데이터와 함께 프로미스를 해결합니다.
    })
    .catch((error) => {
      reject(error); // 에러로 프로미스를 거부합니다.
    });
  });
};

export const login = (data) => {
  const {email, password} = data;
  return instance.post("/login", { // baseURL/login
    email, 
    password,
  });
};



