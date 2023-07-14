import { LoginData, RegisterFormData } from '../types/formData';
import { KAKAO_API_BASEURL, createAxiosInstance } from '../utils/axios';

const axiosRegisterInstance = createAxiosInstance(
  KAKAO_API_BASEURL,
  3000,
);
const axiosLoginInstance = createAxiosInstance(
  KAKAO_API_BASEURL,
  3000,
);

export async function checkEmail(email: string) {
  try {
    const response = await axiosRegisterInstance.post('/check', { email });

    return response.data.success === true;
  } catch (error) {
    return false;
  }
}

export async function requestUserRegistration({ email, password, username }: RegisterFormData) {
  const response = await axiosRegisterInstance.post('/join', {
    email,
    password,
    username,
  });

  return response.status === 200 && response.data.success === true;
}

export function requestUserLogin({ email, password }: LoginData) {
  return axiosLoginInstance.post('/login', {
    email,
    password,
  });
}
