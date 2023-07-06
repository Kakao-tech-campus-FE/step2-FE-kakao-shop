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
        return response;
    },
    (error) => {
        return Promise.reject(new Error(error));
    }
);

export default api;