import { RegisterData } from './dto';
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

const register = (data: RegisterData) => {
  const { email, password, username } = data;
  return instance.post('/join', { email, password, username });
};

const checkEmailDup = (email: string) => {
  return instance.post('/check', email);
};

export { register, checkEmailDup };
