import axios from 'axios';
import { loginInfo } from '../dto/loginDto';

const login = ({ email, password }: loginInfo) => {
  return axios
    .post('/login', {
      email,
      password,
    })
    .then((response) => {
      // TODO
    })
    .catch((error) => {
      // TODO
    });
};

export default { login };
