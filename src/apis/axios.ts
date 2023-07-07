import axios from 'axios';
import { LoginData, RegisterFormData } from '../types/formData';

const axiosRegisterInstance = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_API_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const axiosLoginInstance = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_API_URL,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export async function checkEmail(email: string) {
  try {
    const response = await axiosRegisterInstance.post('/check', { email });

    return response.data.success === true;
  } catch (error) {
    return false;
  }
}

export function requestUserRegistration({ email, password, username }: RegisterFormData) {
  return axiosRegisterInstance.post('/join', {
    email,
    password,
    username,
  });
}

export function requestUserLogin({ email, password }: LoginData) {
  return axiosLoginInstance.post('/login', {
    email,
    password,
  });
}

axiosLoginInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      return Promise.resolve(error.response);
    }

    return Promise.reject(error);
  },
);
