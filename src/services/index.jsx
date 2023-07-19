import axios from 'axios';

/** instance 설정할 때는 주소를 명시적으로 적는 것이 아니라 environment 설정 해줘야 함
 * timeout을 꼭 써야 한다
 */

export const instance = axios.create({
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
        console.log(response);
        return response;
    },
    (error) => {
        if (!!error.response.data.error) {
            const err = error.response.data.error;
            if (parseInt(err.status) >= 500) {
                console.log('500번 대 에러 처리');
            } else if (parseInt(err.status) >= 400) {
                console.log('400번 대 에러 처리');
            } else if (parseInt(err.status) >= 300) {
                console.log('300번 대 에러 처리');
            } else if (parseInt(err.status) >= 200) {
                console.log('200번 대 에러 처리');
            }

            alert(err.message);
        } else {
            throw new Error(error);
        }
    }
);
