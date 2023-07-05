import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // 수정된 부분
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `${token}`;
  }
  return config;
});

// middleware
instance.interceptors.response.use(
  (response) => {
    return console.log(response.data);
  },
  (error) => {
    console.error(error);
  }
);

export const register = (data) => {
  const { email, password, username } = data;
  // console.log('Request URL:', instance.defaults.baseURL + '/join');
  return instance.post('/join', { email, password, username });
};

export const login = (data) => {
  const { email, password } = data;
  return instance.post('/login', { email, password });
};
