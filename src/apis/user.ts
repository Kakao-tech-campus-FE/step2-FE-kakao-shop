import { LoginData, RegisterFormData } from '../types/formData';
import { kakaoUserInstance } from '../utils/axios';

export async function checkEmail(email: string) {
  try {
    const response = await kakaoUserInstance.post('/check', { email });

    return response.status === 200 && response.data.success === true;
  } catch (error) {
    return false;
  }
}

export async function requestUserRegistration({ email, password, username }: RegisterFormData) {
  const response = await kakaoUserInstance.post('/join', {
    email,
    password,
    username,
  });

  return response.status === 200 && response.data.success === true;
}

export function requestUserLogin({ email, password }: LoginData) {
  return kakaoUserInstance.post('/login', {
    email,
    password,
  });
}
