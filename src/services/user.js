import { instance } from "./index";

/**
 * 회원가입
 * @param {object} param0 
 * @returns 
 */
export const register = ({ email, password, username }) => {
    return instance.post("/join", { email, password, username })
}

/**
 * 로그인
 * @param {object} param0 
 */
export const login = ({ email, password }) => {
    return instance.post("/login", { email, password });
}

export const emailCheck = ({ email }) => {
    return instance.post("/check", { email });
}