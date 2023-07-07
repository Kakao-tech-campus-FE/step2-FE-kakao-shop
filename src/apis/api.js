import axios from "axios";

// instance
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 1000 * 5,
});

// middleware
instance.interceptors.request.use(
  (config) => {
    const jwt = localStorage.getItem("token");
    if (jwt) config.headers["Authorization"] = `Bearer ${jwt}`;
    return config;
  },
  (error) => {
    console.err(`[API REQEST ERROR] ${error}`);
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(`[API RESPONSE ERROR] ${error}`);
    console.log(error.response.data);
    return Promise.reject(error);
  }
);

// export
export async function emailCheckReq(data) {
  const { email } = data;
  return await instance.post("/check", {
    email: email,
  });
}

export async function signUpReq(data) {
  const { email, username, password } = data;
  return await instance.post("/join", {
    email: email,
    password: password,
    username: username,
  });
}

export async function logInReq(data) {
  const { email, password } = data;
  return await instance.post("/login", {
    email: email,
    password: password,
  });
}
