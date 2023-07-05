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

const login = (data: LoginData) => {
  const { id, password } = data;
  return instance.post('/login', data);
};

export default login;
