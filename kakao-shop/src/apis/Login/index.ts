import { client } from '@apis/client';

export const signInAPI = async ({ email, password }: Pick<SignInRequest, 'email' | 'password'>) => {
  const res = await client.post('/login', { email, password });

  return res;
};

export type SignInRequest = {
  email: string;
  password: string;
  navigate: any;
  setErrorMessage: any;
};

export type SignInResponse = {
  success: boolean;
  response: null;
  error: Error | null;
};

export type Error = {
  message: string;
  status: number;
};
