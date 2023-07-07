import axios from "axios";
import cookie from 'react-cookies';
import {ResponseType} from "./type";

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
api.interceptors.response.use(
    (response) => {
        console.log("success", response);
        return Promise.resolve(new ResponseType(response.data));
    },
    (error) => {
        console.log("error", error)
        let message = error.response?.data?.error?.message;
        let status = error.response?.status;
        if (!message) {
            if (status === 401) {
                message = "다시 로그인 해주세요"
                cookie.remove('access_token', {path: '/'});
                cookie.remove('user_id', {path: '/'});
            }
            if (status === 500) {
                message = "서버에 문제가 발생했습니다.";
            }
            if (status === 501) {
                message = "잘못된 접근입니다.";
            }
        }

        return Promise.resolve(
            new ResponseType({
                success: false,
                response: null,
                error: {
                    message,
                    status,
                },
            })
        );

    }
);

export default api;