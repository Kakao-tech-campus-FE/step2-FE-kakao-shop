import { client } from '@apis/client';

import { SignUpRequest, EmailDuplicateCheckRequest } from '@hooks/ui/useSignUpForm';

export const signUp = async ({ email, password, username }: Omit<SignUpRequest, 'navigate'>) => {
  const res = await client.post('/join', { email, password, username });

  return res;
};

export const getDuplicateCheck = async (email: string) => {
  const res = await client.post('/check', { email });

  return res;
};
