import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  (response) => {
    if (response.headers.authorization) {
      return { ...response.data, token: response.headers.authorization };
    }
    return response.data;
  },
  (error) => {
    switch (error.status) {
      case 404:
        window.history.pushState('', '', '/404');
        break;
      case 500:
        window.history.pushState('', '', '/500');
        break;
    }
    return error.response.data;
  }
);
export default instance;
