import axios, { AxiosError } from 'axios';
import { SignUpInfo } from '../dto/registerDto';

const signUp = async ({ email, password, username }: SignUpInfo) => {
  try {
    const response = await axios.post('/join', {
      email,
      password,
      username,
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      return error?.response?.data;
    }
    return error;
  }
};

export default { signUp };
