import { instance } from "./index";

export const register = (data) => {
    const { email, password, username } = data;
    return instance.post("/join", {
        email,
        password,
        username,
    });
};

export const emailCheck = (data) => {
    const { email } = data;
    return instance.post("/check", {
        email,
    })
};


export const login = async (data) => {
    const { email, password } = data;
    return await instance.post("/login", {
        email,
        password,
    });
};