import api from "./index";
import {ErrorType} from "./type";
import {checkCartValidation} from "../util/validation";

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

const getDetailProduct = async (productId) => {
    const data = await api.get("/products/" + productId);
    const {id, productName, price, starCount, options} = data;
    //주요 데이터들이 존재하는지 확인
    if (!id || !productName || !price || !starCount || !options) {
        throw new ErrorType({
            message: "올바르지 않은 데이터 형식입니다.",
        });
    }
    //주요 데이터들이 형식에 맞는지 확인.
    if (isNaN(Number(price)) || isNaN(Number(starCount)) || !Array.isArray(options)) {
        throw new ErrorType({
            message: "올바르지 않은 데이터 형식입니다.",
        });
    }
    return data;
}

const addInCart = async (options) => {
    console.log("addInCart", options)
    return await api.post("/carts/add", options);
}

const getCart = async () => {
    const data = await api.get("/carts");
    return checkCartValidation(data);
}

const updateCart = (options) => {
    return api.post("/carts/update", options);
}

export {checkDuplicateEmail, signUp, signIn, getProducts, getDetailProduct, addInCart, getCart, updateCart};
