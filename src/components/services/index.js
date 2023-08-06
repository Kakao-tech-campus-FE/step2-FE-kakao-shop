import axios from "axios"
import Swal from 'sweetalert2'
import { clearTokens } from "../../utils/constants";

export const instance = axios.create({
    baseURL : process.env.REACT_APP_API_URL, // production level 에서는 env에서 넣어주어야함(보안 관련)
    timeout : 1000, // 타임아웃이 없으면 무한정 wait가 걸려버릴 수도 있다!
    headers : {
        "Content-Type" : "application/json"  // 서버단에서 이런 형태를 많이써서, 프론트단에서 쏴줄 때 이렇게 많이 쓴다.
    }
}); 

// request - 요청
// 인스턴스가 create 되면서 토큰을 발급하면 잘 안먹히는 경우가 있어서, request단에서 처리한다.
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
    // HTTP 응답 코드별 상태 정리
    // 1XX : 정보 제공
    // 2XX : 성공(Success)
    // 3XX : 리다이렉션(Redirection)
    // 4XX : 클라이언트 에러
    // 5XX : 서버 에러
    (error) => {
        // 401 error : 인증되지 않음 - 로그인 화면으로 이동
        // token은 백엔드에서 유효하지 않다면 401(Unauthorized) Http code를 보내주기에, 이에따라 처리
        if (error.response.status === 401) {
            clearTokens();
            Swal.fire({
                icon: 'error',
                title: '로그인을 진행해주세요!',
                text: error.response.data.error.message,
                confirmButtonText: '확인',
            })
            .then(() => {
                window.location.href = "/login";
            })
            return Promise.resolve();
        }

        // 404 error : 지정한 리소스를 찾을 수 없음
        // 에러 메시지를 띄워주는 것 외에, 잘못된 경로로 이동 시 NotFound페이지로 이동(라우팅에서 처리)
        if (error.response.status === 404) {
            Swal.fire({
                icon: 'error',
                title: '아이쿠! 에러가 발생했네요😅',
                text: error.response.data.error.message,
                confirmButtonText: '확인',
            })
            return Promise.reject(error.response);
        }

        // 401, 404 외의 다른 error에 대한 처리 및 에러 메시지 확인 가능
        else {
            Swal.fire({
                icon: 'error',
                title: '내용을 다시 확인해 주세요!',
                text: error.response.data.error.message,
                confirmButtonText: '확인',
            })
            // 성공인지 실패인지 여부에 따라 resolve, reject 처리
            // response를 제대로 받아도 만약 특정 데이터가 없을때 에러로 처리하고 싶다면 reject 처리
            return Promise.reject(error.response);
        }
    }
)