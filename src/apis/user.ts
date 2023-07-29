import { LoginData, RegisterFormData } from '../types/formData';
import { kakaoInstance } from './instance';

export function checkEmail(email: string) {
  return kakaoInstance.post('/check', { email });
}

export async function requestUserRegistration({ email, password, username }: RegisterFormData) {
  return kakaoInstance.post('/join', {
    email,
    password,
    username,
  });
}

export function requestUserLogin({ email, password }: LoginData) {
  return kakaoInstance.post('/login', {
    email,
    password,
  });
}
