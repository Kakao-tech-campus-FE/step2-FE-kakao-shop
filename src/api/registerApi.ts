import { RegisterData } from './dto';
import instance from '.';

const register = (data: RegisterData) => {
  const { email, password, username } = data;
  return instance.post('/join', { email, password, username });
};

const checkEmailDup = (email: string) => {
  return instance.post('/check', email);
};

export { register, checkEmailDup };
