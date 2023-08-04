import axios from "axios";

const staticServerUri = process.env.REACT_APP_PATH || "";

const filteredUri = (uri) => {
	const parts = uri.split('undefined')
	return parts.join('')
}

export const instance = axios.create({
  baseURL: filteredUri(staticServerUri + '/api/'),
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// middleware
instance.interceptors.response.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
