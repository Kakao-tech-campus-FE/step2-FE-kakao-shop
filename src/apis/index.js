import axios from 'axios';

const staticServerUrl = process.env.REACT_APP_PATH || '';

export const instance = axios.create({
  baseURL: staticServerUrl + '/api/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('user');
  if (token) {
    const parsedToken = JSON.parse(token).value;
    config.headers['Authorization'] = `${parsedToken}`;
  }
  return config;
});

//middleware
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if(error.response.status === 401) {
    //     //localStorage.removeItem("token");
    //     //window.location.href = "/login";
    //     //return Promise.resolve();

    // }
    return Promise.reject(error.response);
  }
);
