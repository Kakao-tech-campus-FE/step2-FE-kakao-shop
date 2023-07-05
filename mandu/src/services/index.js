import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (response) => {
        //jwt있으면 처리를 요기서 할예정
        return response;
    },
    (error) => {
        return Promise.reject(new Error(error));
    }
);
