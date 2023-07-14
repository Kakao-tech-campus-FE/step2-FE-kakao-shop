import { atomWithStorage } from 'jotai/utils';

export const jwtAtom = atomWithStorage('token', '');
