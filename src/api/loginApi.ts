import axios from 'axios';
import LoginData from './dto';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'applicatoin/json',
    Authorization: 'Base',
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
    console.error('An error occurred:', error);
    throw error;
  },
);

const login = (data: LoginData) => {
  const { email, password } = data;
  return instance.post('/login', { email, password });
};

export default login;
