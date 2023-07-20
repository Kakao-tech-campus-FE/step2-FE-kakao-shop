import axios from 'axios';
import { LoginData } from './dto';
import instance from '.';

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const configuration = config;
  if (token) {
    configuration.headers.Authorization = `Bearer ${token}`;
  }
  return configuration;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw new Error();
  },
);

const login = (data: LoginData) => {
  const { email, password } = data;
  return instance.post('/login', { email, password });
};

export default login;
