import axios from "axios";
const staticServerUri = process.env.REACT_APP_PATH || "";
const instance = axios.create({
  baseURL: staticServerUri + "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    // const parsedToken = JSON.parse(token);
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//middleware
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status >= 300 && error.response.status < 400) {
      console.log("리다이렉션");
    } else if (error.response.status === 404) {
      console.log("페이지를 찾을 수 없습니다");
      throw error;
    } else if (error.response.status < 500) {
      console.log("클라이언트 오류");
    } else if (error.response.status < 600) {
      console.log("서버 오류");
    }
    return error.message;
  }
);

export { instance };
