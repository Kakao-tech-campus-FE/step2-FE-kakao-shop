import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `${token}`;
  }
  return config;
});

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    const url = response.config.url;
    const statusCode = response.status;
    let message = null;
    let token = null;
    // 이메일 중복 확인
    if (url === "/check") {
      if (statusCode === 200) {
        return true;
      }
    }
    // 회원가입
    else if (url === "/join") {
      if (statusCode === 200) {
        message = "complete";
        return message;
      }
    }
    // 로그인
    else if (url === "/login") {
      if (statusCode === 200) {
        message = "complete";
        token = response.headers.authorization;
        return { message, token };
      }
    }
  },
  (error) => {
    console.log(error);
    const url = error.config.url;
    const errorCode = error.response.status;
    const errorMessage = error.response.data.error.message;
    // 이메일 중복 확인
    if (url === "/check") {
      if (errorCode === 400) {
        if (errorMessage.includes("동일한 이메일이 존재합니다")) {
          return "duplicateEmail";
        } else {
          return "notFormed";
        }
      }
    }
    // 회원가입
    else if (url === "/join") {
      if (errorCode === 400) {
        if (errorMessage.includes("동일한 이메일이 존재합니다")) {
          return "duplicateEmail";
        }
      }
    }
    // 로그인
    else if (url === "/login") {
      if (errorCode === 400 || errorCode === 401) {
        return { message: "notVerified", token: null };
      }
    }
  }
);

// 이메일 중복 확인 요청
export const check = (data) => {
  const { email } = data;
  return instance.post("/check", { email });
};

// 회원가입 요청
export const register = (data) => {
  // 요청에 맞지 않는 데이터가 들어오는 것을 방지하기 위한 구조분해할당
  const { email, password, username } = data;
  return instance.post("/join", { email, password, username });
};

// 로그인 요청
export const login = (data) => {
  const { email, password } = data;
  return instance.post("/login", {
    email,
    password,
  });
};
