import {ErrorType} from "../services/type";

const emailValidation = new RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
const passwordValidation = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,20}$/);

export const userValidation = (values) => {

    let errors = {};
    //undefined는 객체에서 해당 key 값이 없는 경우니 이럴 경우 에러를 추가할 필요없으니 제외시켰다.

    //아이디
    if (values.id !== undefined) {
        if (!values.id) {
            errors.id = "아이디를 입력해주세요";
        } else if (!emailValidation.test(values.id)) {
            errors.id = "이메일 형식이 아닙니다.";
        }
    }

    //비밀번호
    if (values.password !== undefined) {
        if (!values.password) {
            errors.password = "비밀번호를 입력해주세요";
        } else if (!passwordValidation.test(values.password)) {
            errors.password = "비밀번호는 8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요. 공백은 허용되지 않습니다.";
        }
    }

    //비밀번호 확인
    if (values.checkPassword !== undefined) {
        if (!values.checkPassword) {
            errors.checkPassword = "비밀번호를 입력해주세요";
        } else if (values.password !== values.checkPassword) {
            errors.checkPassword = "비밀번호가 일치하지 않습니다.";
        }
    }

    return errors;
}


export const checkCartValidation = (data) => {
    let {products, totalPrice} = data;
    if (!Array.isArray(products) || isNaN(Number(totalPrice))) {
        throw new ErrorType({
            message: "올바르지 않은 데이터 형식입니다.",
        });
    }
    totalPrice = Number(totalPrice);
    products.map((product) => {
        if (!Array.isArray(product.carts)) {
            throw new ErrorType({
                message: "올바르지 않은 데이터 형식입니다.",
            });
        }
    })
    return {products, totalPrice};
};