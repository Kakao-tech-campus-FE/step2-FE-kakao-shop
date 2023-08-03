import axios from "axios";
import staticServerUri from "../utils/krampoline";

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
    return response;
  },
  (e) => {
    // eslint-disable-next-line default-case
    switch (e.response.status) {
      case 404:
        window.location.replace(`${staticServerUri}/error`);
        break;
    }
    return e.response.data;
  }
);

export default instance;
