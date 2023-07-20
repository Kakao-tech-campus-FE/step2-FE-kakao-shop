import axios from 'axios';
import { persistStore } from 'redux-persist';
import { useSelector } from 'react-redux';
import store from '../store';
import { getCookie } from '../storage/Cookie';
import ErrorPage from '../pages/ErrorPage';
import { Link } from 'react-router-dom';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// persistStore(store, null, () => {
//   const token = useSelector((state) => state.user.token);
//   console.log(token);
//   instance.interceptors.request.use((config) => {
//     if (token) {
//       config.headers['Authorization'] = token;
//     }
//     return config;
//   });
// });

instance.interceptors.request.use((config) => {
  const token = getCookie('token');
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
});

//middleware
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status >= 400 && error.response.status <= 500) {
      if (error.response.status === 404) {
        <Link to="/error" />;
      }

      localStorage.removeItem('token');
      const errorMessage = error.response.data.error.message;
      alert(errorMessage);
      // window.location.href = '/signup';
      return Promise.resolve();
    }
    return Promise.reject(error.response);
  }
);
