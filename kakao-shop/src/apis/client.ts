import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_PUBLIC_URL;

export const client = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
});
