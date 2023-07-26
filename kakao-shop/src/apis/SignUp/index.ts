import type { Error } from '@apis/Login';
import { client } from '@apis/client';

export const signUpAPI = async ({ email, password, username }: Omit<SignUpRequest, 'navigate'>) => {
  const res = await client.post('/join', { email, password, username });

  return res;
};

export const duplicateEmailCheckAPI = async (email: string) => {
  const res = await client.post('/check', { email });

  return res;
};

export type SignUpRequest = {
  email: string;
  password: string;
  username: string;
  navigate: any;
};

export type SignUpResponse = {
  success: boolean;
  response: null;
  error: Error | null;
};

export type DuplicateEmailCheckRequest = {
  email: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setIsUniqueEmail: React.Dispatch<React.SetStateAction<boolean>>;
};
