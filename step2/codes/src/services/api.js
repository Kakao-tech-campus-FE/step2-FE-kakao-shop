import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
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
    (error) => {}
);

export const register = (data) => {
    const { email, password, username } = data;
    return instance.post("/join", {
        email,
        password,
        username,
    });
};

export const login = (data) => {
    const { email, password } = data;
    return instance.post("/login", {
        email,
        password,
    });
};
