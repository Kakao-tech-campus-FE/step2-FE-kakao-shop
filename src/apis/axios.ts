import axios from 'axios';
import { LoginData, RegisterFormData } from '../types/formData';

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

export async function registerUser({ email, password, username }: RegisterFormData) {
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

export async function loginUser({ email, password }: LoginData) {
  try {
    const response = await axiosInstance.post('/login', {
      email,
      password,
    });

    return response.data.success === true;
  } catch (error) {
    return false;
  }
}
