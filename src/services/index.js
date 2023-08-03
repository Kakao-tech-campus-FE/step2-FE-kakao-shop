import axios from "axios";
import cookies from "react-cookies";

const staticServerUri = process.env.REACT_APP_PATH || "";

export const instance = axios.create({
    baseURL: staticServerUri + process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        "Content-Type" : "application/json",
    }
});

export const tokenInterceptor = () => {
    instance.interceptors.request.use(
        (config) => {
            const token = cookies.load('token');
            if (token) {
                config.headers["Authorization"] = token;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
}

export const removeTokenInterceptor = () => {
    instance.interceptors.request.eject(tokenInterceptor);
}

// middleware
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => { // API 응답 에러 캐칭
        console.log('error', error);
        const code = error.code;
        const status = error?.response?.status;

        if(code === "ECONNABORTED") {
            alert("요청이 만료되었습니다.");
        }
        else if(status === 404){
            window.location.href = staticServerUri + "/notFound";
        }
        else if(status >= 500){
            alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        }
        return Promise.reject(error.response);

    }
);