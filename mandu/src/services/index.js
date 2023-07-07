import axios from "axios";
import cookie from 'react-cookies';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        console.log("request", config);
        const token = cookie.load('access_token');
        if (token) {
            config.headers['authorization'] = token;
        }
        return config;
    }
);

export default api;