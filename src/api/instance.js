import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SHOP_API,
});

instance.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";

    const accessTokenDate = Date.parse(
      localStorage?.getItem("accessTokenDate")
    );
    if (!accessTokenDate) return config;

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
