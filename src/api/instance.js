import axios from "axios";
import store from "store/store";
import useLogout from "hooks/useLogout";

const path = process.env.REACT_APP_PATH || "";
const apiURL = !!path ? path + "/api" : process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: apiURL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const loginState = store.getState().login;

    if (loginState.islogin) {
      config.headers.Authorization = loginState.token;
    }

    if (
      // 로그인 시간 만료, 토큰이 없을때
      loginState.islogin &&
      (Date.now() > loginState.loginTime + 3600 * 24 * 1000 ||
        loginState.token === "")
    ) {
      const logout = useLogout();
      logout();
      alert("로그인 시간이 만료되었습니다.");
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // 로그인일때만 토큰 응답 사용
    if (response.config.url === "/login") {
      return response.headers.authorization;
    }
    return response.data.response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
