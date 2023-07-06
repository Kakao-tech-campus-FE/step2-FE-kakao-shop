import axios from 'axios';

const instance = axios.create({
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
      config.headers.Authorization = `Bearer ${token}`;
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
      console.log(error.response.data.error.message);
      //window.location.href = '/signup';
      return Promise.resolve();
    }
    if (error.response.status === 401) {
      localStorage.removeItem('token');
      console.log(error.response.data.error.message);
      //window.location.href = '/login';
      return Promise.resolve();
    }
    return Promise.reject(error.response);
  }
);

export const register = (data) => {
  const { email, password, username } = data;
  return instance.post('/join', {
    email,
    password,
    username,
  });
};


export const login = (data) => {
  const { email, password } = data;
  return instance.post('/login', {
    email,
    password,
  });
};
