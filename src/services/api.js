import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // 수정된 부분
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
