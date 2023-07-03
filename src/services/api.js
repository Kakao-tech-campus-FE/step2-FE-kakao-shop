import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',

    }
});

// token이 있으면 request header에 token을 실어 보낸다.
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `${token}`;
        }
        return config;
    }
);

// 응답 받은 token을 localStorage에 저장한다.
// 모든 미들웨어는 use()를 사용하여 등록한다.
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = '잘못된 요청입니다.';
                    break;
                case 401:
                    error.message = '로그인이 필요합니다.';
                    break;
                case 403:
                    error.message = '권한이 없습니다.';
                    break;
                case 404:
                    error.message = '데이터를 찾을 수 없습니다.';
                    break;
                case 500:
                    error.message = '서버에러입니다.';
                    break;
                default:
                    error.message = `알 수 없는 에러가 발생했습니다. ${error.response.status}`;
            }
        }
        return Promise.reject(error);
    }
)

export const register = (data) => {
    const {email, password, username} = data;
    instance.post('/users', data)
        .then(res => {
            console.log(res)
        }
    )
}

export const login = (data) => {
    const {email, password} = data;
    instance.post('/users/login', data)
        .then(res => {
            console.log(res)
        }
    )
}