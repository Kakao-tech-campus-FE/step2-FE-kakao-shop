import { client } from '@apis/client';

import { SignUpRequest } from '@hooks/ui/useSignUpForm';

export const signUp = async ({ email, password, username }: Omit<SignUpRequest, 'navigate'>) => {
  const res = await client.post('/join', { email, password, username });

  return res;
};
