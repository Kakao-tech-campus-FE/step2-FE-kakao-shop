import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SHOP_API,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    if (
      !localStorage.getItem("accessTokenDate") ||
      !localStorage("accessToken")
    )
      return config;

    const accessTokenDate = Date.parse(localStorage.getItem("accessTokenDate"));

    const oneDayInMillis = 24 * 60 * 60 * 1000;
    if (accessTokenDate + oneDayInMillis < new Date()) {
      localStorage.removeItem("accessTokenDate");
      localStorage.removeItem("accessToken");
      return config;
    }

    config.headers["Authorization"] = `${localStorage?.getItem("accessToken")}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
