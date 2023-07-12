import axios from "axios";

const instance = axios.create({
  baseURL: "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/",
  timeout: 1000,
  headers: {
    "Content-Type":"application/json",
  }
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401 ) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error.response);
  }
);

export default instance;
