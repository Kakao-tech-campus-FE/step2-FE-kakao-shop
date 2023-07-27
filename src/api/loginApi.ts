import { LoginData } from './dto';
import instance from '.';

const login = (data: LoginData) => {
  const { email, password } = data;
  return instance.post('/login', { email, password });
};

export default login;
