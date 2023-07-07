import axios from 'axios';
import { RegisterData } from './dto';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const configuration = config;
  if (token) {
    configuration.headers.Authorization = `Bearer ${token}`;
  }
  console.log(configuration);
  return configuration;
});

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error.response.data.error.message);
  },
);

const register = (data: RegisterData) => {
  const { email, password, username } = data;
  return instance.post('/join', { email, password, username });
};

export default register;
