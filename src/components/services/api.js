import axios from "axios"
import Swal from 'sweetalert2'

const instance = axios.create({
    baseURL : process.env.REACT_APP_API_URL, // production level 에서는 env에서 넣어주어야함(보안 관련)
    timeout : 1000, // 타임아웃이 없으면 무한정 wait가 걸려버릴 수도 있다!
    headers : {
        "Content-Type" : "application/json"  // 서버단에서 이런 형태를 많이써서, 프론트단에서 쏴줄 때 이렇게 많이 쓴다.
    }
}); 

// request - 요청
// 인스턴스가 create 되면서 토큰을 발급하면 잘 안먹히는 경우가 있어서, request 단에서 받는다.
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `${token}`;
    }
    return config;
});

// response - 응답에서 error의 처리
// 2개의 파라미터 - 정상 처리 & 에러 처리
// middleware(중간에 참여해서 처리해주는 일종의 프록시 서버같은 역할을 수행)
// use -> middleware 처럼 동작할 것이다!(일종의 관습)(대부분의 미들웨어는 use 라는 키워드를 통해서 선언된다)
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // 401 error : 인증되지 않음 - 로그인 화면으로 이동
        if (error.response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
            return Promise.resolve();
        }

        // 400 error : 유효하지 않은 요청 메시지 or 서버가 클라이언트 요청 이해 x
        // if (error.response.status === 400) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'An error occurred!',
        //         text: error.response.data.message,
        //         confirmButtonText: 'Confirm',
        //       });
        // }
        
        return Promise.reject(error.response);
    }
)

// 백엔드 요청!
// 데이터 객체를 정확히 명시해주면 좋다. 데이터가 무엇을 의미하는지 알 수 있게!
// 데이터 객체에 엉뚱한 내용이 들어가는것을 방지할 수 있다.
export const register = (data) => {
    const { email, password, username } = data;

    return instance
    .post("/join", {
        email,
        password,
        username
    })
    .then((response) => {
        Swal.fire({
            title:'회원가입 완료!',
            text: '저희 사이트에 오신 것을 환영합니다😊',
            confirmButtonText:'확인',
        }).then(() => {
            window.location.href = "/";
        })
    })
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: '내용을 다시 확인해 주세요!',
            text: error.data.error.message,
            confirmButtonText: '확인',
            })
        })
}

export const login = (data) => {
    const { email, password } = data;
    return instance.post("/login", {
        email,
        password
    });
}