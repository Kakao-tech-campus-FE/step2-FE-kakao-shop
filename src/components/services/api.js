import axios from "axios"

// http://kakao-app-env.eba-kfsgeb74.ap-northeast-2.elasticbeanstalk.com/
const instance = axios.create({
    baseURL : process.env.REACT_APP_API_URL, // production level 에서는 env에서 넣어주어야함(보안 관련)
    timeout : 1000, // 타임아웃이 없으면 무한정 wait가 걸려버릴 수도 있다!
    headers : {
        "Content-Type" : "application/json"  // 서버단에서 이런 형태를 많이써서, 프론트단에서 쏴줄 때 이렇게 많이 쓴다.
    }
}); 

// 인스턴스가 create 되면서 토큰을 발급하면 잘 안먹히는 경우가 있어서, request 단에서 받는다.
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `${token}`;
    }
    return config;
});

// response 단에서 error의 처리
// 2개의 파라미터 - 정상 처리 & 에러 처리
// middleware(중간에 참여해서 처리해주는 일종의 프록시 서버같은 역할을 수행)
// use -> middleware 처럼 동작할 것이다!(일종의 관습)(대부분의 미들웨어는 use 라는 키워드를 통해서 선언된다)
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // if (error.response.status === 401) {
        //     localStorage.removeItem("token");
        //     window.location.href = "/login";
        //     return Promise.resolve();
        // }
        // return Promise.reject(error.response);
    }
)

// 백엔드 요청!
// 데이터 객체를 정확히 명시해주면 좋다. 데이터가 무엇을 의미하는지 알 수 있게!
// 데이터 객체에 엉뚱한 내용이 들어가는것을 방지할 수 있다.
export const register = (data) => {
    const { email, password, username } = data;
    return instance.post("/join", {
        email,
        password,
        username
    });
}

export const login = (data) => {
    const { email, password } = data;
    return instance.post("/login", {
        email,
        password
    });
}