import axios from 'axios';
import { persistStore } from 'redux-persist';
import { useSelector } from 'react-redux';
import store from '../store';
import { getCookie } from '../storage/Cookie';
import ErrorPage from '../pages/ErrorPage';
import { useNavigate } from 'react-router-dom';

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
    if (error.response.status === 401) {
      // 사용자 정보가 유실(headers.Authorization)
      alert('로그인이 필요합니다.');
      const navigate = useNavigate();
      navigate('/login');
    }
    return Promise.reject(error.response);
  }
);
