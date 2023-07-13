import axios from "axios";
import cookies from "react-cookies";

export const instance = axios.create({
    // baseURL: "http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/",
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        "Content-Type" : "application/json",
    }
});

instance.interceptors.request.use((config) => {
    const token = cookies.load('token');
    if (token) {
        config.headers["Authorization"] = token;
    }
    return config;
});

// middleware
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // if(error.response.status === 400) {

        // }
        if(error.response.status === 401) {
            // localStorage.removeItem("token");
            // window.location.href = "/login";
            // return Promise.resolve();
        }
        return Promise.reject(error.response);
    }
);