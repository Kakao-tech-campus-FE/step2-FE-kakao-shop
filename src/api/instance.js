import axios from "axios";
import store from "store/store";
import { useDispatch } from "react-redux";
import { clearUserReducer } from "reducers/loginSlice";

const path = process.env.REACT_APP_PATH || "";
const apiURL = process.env.REACT_APP_API_URL || process.env.REACT_APP_PATH;

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

    // 토큰 필요한 요청일 때
    if (config.url.includes("carts") || config.url.includes("orders")) {
      if (loginState.islogin) {
        config.headers.Authorization = loginState.token;
      } else {
        alert("로그인이 필요합니다.");
        window.location.href = path + "/login";
        return Promise.resolve();
      }
    }

    if (
      // 로그인 시간 만료
      loginState.islogin &&
      Date.now() > loginState.loginTime + 3600 * 24 * 1000
    ) {
      const dispatch = useDispatch();
      dispatch(clearUserReducer());
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
    console.log(response);
    // 로그인일때만 토큰 응답 사용
    if (response.config.url === "/login") {
      return response.headers.authorization;
    }
    return response.data.response;
  },
  (error) => {
    // fallback 에서 처리
  }
);

export default instance;
