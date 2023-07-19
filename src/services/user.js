import { instance } from "./index";

export const register = ({ email, password, username }) => {
    return instance.post("/join", { email, password, username })
}

export const login = ({ email, password }) => {
    return instance.post("/login", { email, password });
}

export const emailCheck = ({ email }) => {
    return instance.post("/check", { email });
}