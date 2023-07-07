import axios from 'axios';
import { LoginData, RegisterFormData } from '../types/formData';
import { LOCALSTORAGE_KEY_TOKEN, TOKEN_EXPIRE_DATE } from '../utils/common';
import { setItemWithExpireDate } from '../utils/localStorage';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_API_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function checkEmail(email: string) {
  try {
    const response = await axiosInstance.post('/check', { email });

    return response.data.success === true;
  } catch (error) {
    return false;
  }
}

export async function requestUserRegistration({ email, password, username }: RegisterFormData) {
  try {
    const response = await axiosInstance.post('/join', {
      email,
      password,
      username,
    });

    return response.data.success === true;
  } catch (error) {
    return false;
  }
}

export async function requestUserLogin({ email, password }: LoginData) {
  try {
    const response = await axiosInstance.post('/login', {
      email,
      password,
    });

    const result = response.data.success === true;

    if (result) {
      setItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN, response.headers.authorization, TOKEN_EXPIRE_DATE);
    }

    return result;
  } catch (error) {
    return false;
  }
}
