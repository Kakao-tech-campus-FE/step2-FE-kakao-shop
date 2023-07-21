import axios from "axios";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    }
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if(token) {
        config.headers["Authorization"] = token;
    }
    return config;
});

// middleware
instance.interceptors.response.use(
    (response) => {
        return response 
    },
    (error) => {
        /*
        if(error.response.status === 401) {
            localStorage.removeItem("token");
            alert(error.response.data.error.message);
            return Promise.resolve();
        }
        if(error.response.status === 400) {
            alert(error.response.data.error.message);
            return Promise.resolve();
        }
        */
        // return Promise.reject(error.response);
        return Promise.resolve();
    }
);
