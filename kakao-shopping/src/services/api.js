import axios from "axios";

export const instance = axios.create({
    baseURL:
        "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `${token}`;
    } else {
        console.log("no token");
    }
    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // localStorage.removeItem("token");
        return error.response;
    }
);

export const emailValid = (data) => {
    const { email } = data;
    return instance.post("/check", {
        email: email,
    });
};

export const register = (data) => {
    const { email, password, username } = data;
    return instance.post("/join", {
        email: email,
        password: password,
        username: username,
    });
};

export const login = (data) => {
    const { email, password } = data;
    return instance.post("/login", {
        email: email,
        password: password,
    });
};
