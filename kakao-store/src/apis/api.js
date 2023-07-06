import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    }
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if(token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

// middleware
instance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if(error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
            return Promise.resolve();
        }
        return Promise.reject(error.response);
    }
)

const register = (data) => {
    const { email, password, username } = data;
    return instance.post("/join", {
        email,
        password,
        username,
    })
}

const login = (data) => {
    const { email, password } = data;
    return instance.post("/login", {
        email,
        password,
    })
}

export { register, login }