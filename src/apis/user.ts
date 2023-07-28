import { LoginData, RegisterFormData } from '../types/formData';
import { kakaoInstance } from './instance';

export function checkEmail(email: string) {
  return kakaoInstance.post('/check', { email });
}

export async function requestUserRegistration({ email, password, username }: RegisterFormData) {
  const response = await kakaoInstance.post('/join', {
    email,
    password,
    username,
  });

  return response.status === 200 && response.data.success === true;
}

export function requestUserLogin({ email, password }: LoginData) {
  return kakaoInstance.post('/login', {
    email,
    password,
  });
}
