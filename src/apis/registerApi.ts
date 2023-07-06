import axios from 'axios';
import { SignUpInfo } from '../dto/registerDto';

const signUp = ({ email, password, username }: SignUpInfo) => {
  return axios
    .post('/join', {
      email,
      password,
      username,
    })
    .then((response) => {
      // TODO
    })
    .catch((error) => {
      // TODO
    });
};

export default { signUp };
