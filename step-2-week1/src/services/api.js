import axios from "axios";

const instance = axios.create({
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
    console.log(error.response.status);
    console.log(error.response.data.error.message);
    return Promise.resolve(error.response.data.error.message);
    // 주석 지워도 됨. 그저 예시
    // if (error.response.status === 400) {
    //   localStorage.removeItem("token");
    //   // window.location.href = "/login";
    //   return Promise.resolve();
    // }
    // return Promise.reject(error.response);
  }
);

export const emailDuplicateCheck = (email) => {
  return instance.post("/check", {
    email,
  });
};



// 아래 한줄 지워도 됨
export default instance;

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

export const fetchProducts = (page = 0) => {
  return instance.get("/products" + "?page=" + page);
};