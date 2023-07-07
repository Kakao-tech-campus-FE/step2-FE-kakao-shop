import { client } from '@apis/client';

import { SignInRequest } from '@hooks/page/Login/useLoginForm';

export const signIn = async ({ email, password }: Pick<SignInRequest, 'email' | 'password'>) => {
  const res = await client.post('/login', { email, password });

  return res;
};
