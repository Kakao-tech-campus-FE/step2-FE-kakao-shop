import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000 * 5,
    headers: {
        "Content-Type": "application/json;charset=UTF-8"
    }
});

export default instance;

instance.interceptors.request.use(
    async (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("token");
        }
        return Promise.reject(error);

    }
);

export const register = (data) => {
    const { email, username, password } = data;
    return instance.post("/join", {
        email,
        username,
        password
    });
};

export const login = (data) => {
    const { email, password } = data;
    return instance.post("/login", {
        email,
        password
    });
};