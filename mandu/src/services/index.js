import axios from "axios";
import cookie from 'react-cookies';
import {ErrorType} from "./type";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

api.interceptors.request.use(
    (config) => {
        console.log(`[${config.method.toUpperCase()}] url:${config.url} params:${config.params} data:${config.data}`);
        const token = cookie.load('access_token');
        if (token) {
            config.headers['authorization'] = token;
        }
        return config;
    }
);
api.interceptors.response.use(
    (response) => {
        console.log("Api success", response);
        const token = response?.headers['authorization']
        if (token) {
            const expires = new Date();
            expires.setDate(expires.getDate() + 1);
            cookie.save('access_token', token, {
                path: '/',
                expires,
            });
        }
        return Promise.resolve(response?.data?.response);
    },
    (error) => {
        console.error("Api error", error)
        let message = error.response?.data?.error?.message;
        let status = error.response?.status;
        if (status === 401) {
            cookie.remove('access_token', {path: '/'});
            cookie.remove('user_id', {path: '/'});
            if (!!!message) {
                message = "로그인이 필요합니다.";
            }
        }

        switch (status) {
            case 404:
                message = "존재하지 않는 페이지입니다.";
                break;
            case 500:
                message = "서버에 문제 발생했습니다.";
                break;
            case 501:
                message = "잘못된 접근입니다.";
                break;
        }

        return Promise.reject(
            new ErrorType({
                message,
                status,
            })
        );
    }
);

export default api;
