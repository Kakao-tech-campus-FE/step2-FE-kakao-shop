import axios from "axios";

import routes from "../routes/routes";

const staticServerUri = process.env.REACT_APP_PATH || "";
export const instance = axios.create({
    baseURL: staticServerUri+'/api',
    timeout: 1000 * 5,
    headers: {
        "Content-Type": "application/json"
    }
})

//원래 해더에 authorization 넣었는데 create 의 경우 반영 안되는 경우도 있어서
//중간에 끼워넣기 해주기

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`
    }
    return config;
})

// 로컬에 토큰이 있는 경우 헤더에 authorization : bearer token값 넣어주기
// use 는 middleware 일 경우가 많음
// midleware 는 중간에 처리 해주는 프록스 서버 같은 것

instance.interceptors.response.use(
    (response) => {
        return response;
        //요청 전달되기 전에 작업 수행
    },
    (error) => {
        // 요청 오류가 있는 경우 작업 수행
        if (error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = `${routes.home}`;
            return Promise.resolve(error.response.data.error.message);
        }
        return Promise.reject(error.response);
    }
)
//401 에러 캐치(jwt 만료)


