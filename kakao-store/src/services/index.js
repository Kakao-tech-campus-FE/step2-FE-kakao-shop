import axios from 'axios';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers["Authorization"] = token;
    }
    return config;
  }
);

//middleware
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 400) {
      localStorage.removeItem('token');
      const errorMessage = error.response.data.error.message;
      alert(errorMessage);
      window.location.href = '/signup';
      return Promise.resolve();
    }
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      const errorMessage = error.response.data.error.message;
      alert(errorMessage);

      return Promise.resolve();
    }
    return Promise.reject(error.response);
  }
);

