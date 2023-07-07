import axios from 'axios';

import { getCookie } from '@utils/cookie';

export const BASE_URL = process.env.REACT_APP_PUBLIC_URL;

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
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
