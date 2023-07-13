import api from "./index";

const checkDuplicateEmail = async (email) => {
    return await api.post("/check", {
        email
    });
}

const signUp = async ({email, password, username}) => {
    return await api.post("/join", {
        email,
        password,
        username
    });
}

const signIn = async ({email, password}) => {
    return await api.post("/login", {
        email,
        password
    });
}

export {checkDuplicateEmail, signUp, signIn};
