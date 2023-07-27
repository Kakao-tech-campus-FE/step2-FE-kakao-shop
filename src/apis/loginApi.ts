import axios, { AxiosError } from 'axios';
import { loginInfo } from '../dto/loginDto';

const login = async ({ email, password }: loginInfo) => {
  try {
    const response = await axios.post('/login', {
      email,
      password,
    });

    localStorage.setItem('token', response.headers.authorization);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error?.response?.data;
    }
    return error;
  }
};

export default { login };
