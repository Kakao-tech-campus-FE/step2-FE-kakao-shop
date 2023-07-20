import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SHOP_API,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    const accessTokenDate = localStorage.getItem("accessTokenDate");
    const accessToken = localStorage.getItem("accessToken");

    if (!accessTokenDate || !accessToken) return config;

    const oneDayInMillis = 24 * 60 * 60 * 1000;
    if (Date.parse(accessTokenDate) + oneDayInMillis < new Date()) {
      localStorage.removeItem("accessTokenDate");
      localStorage.removeItem("accessToken");
      return config;
    }

    config.headers["Authorization"] = accessToken.replace('"', "");
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (!error.response || !error.response.status) {
      return Promise.reject(error);
    }

    switch (error.response.status) {
      case 401:
        // Promise chaining
        return new Promise(() => {});
      case 404:
        return new Promise(() => {});
      default:
        return Promise.reject(error);
    }
  }
);

export default instance;
