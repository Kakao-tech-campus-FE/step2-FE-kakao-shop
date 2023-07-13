import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = token;
    }
    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            // 응답이 있는 경우 상태 코드에 따른 처리를 수행
            const { status } = error.response;
            if (status >= 400 && status < 500) {
                // 400번대 상태 코드에 대한 처리
                // 예: 에러 메시지 출력 등
                console.log("Client error:", error.message);
            } else if (status >= 500) {
                // 500번대 상태 코드에 대한 처리
                // 예: 에러 메시지 출력 등
                console.log("Server error:", error.message);
            }
        } else if (error.request) {
            // 요청은 성공했지만 응답을 받지 못한 경우에 대한 처리
            console.log("No response:", error.message);
        } else {
            // 요청을 보내기 전에 발생한 오류에 대한 처리
            console.log("Request error:", error.message);
        }
        return Promise.reject(error);
    }
);

export const register = (data) => {
    const { email, password, username } = data;
    return instance.post("/join", {
        email,
        password,
        username,
    });
};

export default instance;
