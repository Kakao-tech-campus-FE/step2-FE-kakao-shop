import axios from "axios";

const staticServerUri = process.env.REACT_APP_PATH || "";

export const instance = axios.create({
    baseURL: staticServerUri + "/api",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
});

// api 요청
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = token;
    }
    return config;
});

//middleware : 중간에서 처리하는 일종의 프록시 서버같은 역할
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error?.response?.data.error.message);
    }
);
