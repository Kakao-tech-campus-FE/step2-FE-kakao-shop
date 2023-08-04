import { instance } from '.';
import ENDPOINT from '../constants/ENDPOINT';

export const signup = (data) => {
    const { email, password, username } = data;
    return instance.post(ENDPOINT.SIGNUP, { email, password, username });
};

export const emailCheck = (data) => {
    const { email } = data;
    return instance.post(ENDPOINT.EMAILCHECK, { email });
};

export const login = (data) => {
    const { email, password } = data;
    return instance.post(ENDPOINT.LOGIN, { email, password });
};
