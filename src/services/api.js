import axios from 'axios';

/** instance 설정할 때는 주소를 명시적으로 적는 것이 아니라 environment 설정 해줘야 함
 * timeout을 꼭 써야 한다
 */

console.log(import.meta.env.VITE_APP_API_URL);
const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    timeout: 1000 * 5,
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});

// middleware
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        throw new Error(error.message);
    }
);

export const signup = (data) => {
    const { email, password, username } = data;
    return instance.post('/join', { email, password, username });
};

export const emailCheck = (data) => {
    const { email } = data;
    return instance.post('./check', { email });
};

export const login = (data) => {
    const { email, password } = data;
    return instance.post('./login', { email, password });
};
