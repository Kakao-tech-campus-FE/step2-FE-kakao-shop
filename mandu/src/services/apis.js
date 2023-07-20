import api from "./index";
import {ErrorType} from "./type";

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

const getProducts = async ({pageParam = 0}) => {
    const data = await api.get("/products", {
        params: {
            page: pageParam
        }
    });
    if (!Array.isArray(data)) {
        throw new ErrorType({
            message: "올바르지 않은 데이터 형식입니다.",
        });
    }

    return {data, nextPage: data.length !== 0 ? pageParam + 1 : undefined};
}

export {checkDuplicateEmail, signUp, signIn, getProducts};
