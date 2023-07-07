import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  function (response) {
    // const currentState = useSelector((state) => state.user.currentState);
    const successMessage = response.config.url.includes("/join")
      ? "회원가입 성공!"
      : "로그인 성공!";
    alert(successMessage);
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const register = (data) => {
  const { email, password, username } = data;
  return instance.post("/join", {
    email,
    password,
    username,
  });
};

export const signIn = (data) => {
  const { email, password } = data;
  return instance.post("/login", {
    email,
    password,
  });
};
