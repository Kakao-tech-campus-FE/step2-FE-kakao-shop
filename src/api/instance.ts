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
      return { data: response.data, token: response.headers.authorization };
    }
    return response.data;
  },
  (error) => {
    return error.response.data;
  }
);
export default instance;
