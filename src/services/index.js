import axios from 'axios';

const instance = axios.create({
  baseURL: "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/", 
  // baseURL: Process.env.REACT_APP_API_URL  <-- 이렇게 하면 오류가 납니다. 
  // http 대신 https로 변경해주었는데, 맞게 변경한 건지와 맞다면 변경해야하는 이유가 궁금합니다. 
  timeout: 1000,
  headers: {
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = 'Bearer ${token}';
  }
  return config;
});

// middleware
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {}
)

export const register = (data) => {
  const { email, password, username } = data;
  return instance.post("/join", {
    email,
    password,
    username,
  });
};

export const login = (data) => {
  const { email, password } = data;
  return instance.post("/login", {
    email,
    password,
  });
}

