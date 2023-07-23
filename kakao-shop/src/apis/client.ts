import axios from 'axios';

import { getCookie } from '@utils/cookie';

export const BASE_URL =
  process.env.REACT_APP_ENV === 'dev_mock' ? process.env.REACT_APP_DEV_SERVER : process.env.REACT_APP_PROD_SERVER;

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use(config => {
  const accessToken = getCookie('accessToken');
  if (accessToken) {
    config.headers['Authorization'] = accessToken;
  }
  return config;
});
