import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => {
    if (response.headers.getAuthorization()) {
      return {
        data: response.data,
        token: response.headers.getAuthorization(),
      };
    }
    return response.data;
  },
  (e) => {
    return e.response.data;
  }
);

export default instance;
