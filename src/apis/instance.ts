import { createFetchInstance } from '../utils/fetch';
import { staticServerUri } from '../utils/serverUri';

export const kakaoInstance = createFetchInstance(
  `${staticServerUri}/api`,
  3000,
);
