import Swal from 'sweetalert2'
import { instance } from './index';
import { registerWelcomeMessage } from "../../utils/constants";

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
    .then(() => {
        Swal.fire(registerWelcomeMessage)
        .then(() => {
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
    return instance
    .post("/login", {
        email,
        password
    });
}