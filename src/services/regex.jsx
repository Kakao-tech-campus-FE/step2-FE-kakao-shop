//정규표현식으로 양식 제어하기

const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[?!@#$%^~*+=-])(?=.*[0-9]).{8,20}$/;

//8에서 20자 이내
//영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다


const emailCheck = (username) => {
    return emailRegEx.test(username); //형식에 맞을 경우, true 리턴
}
const passwordCheck = (password) => {
    return passwordRegEx.test(password);
}
const passwordReCheck = (password, passwordChk) => {
    return (password === passwordChk)

}


export { emailCheck, passwordCheck, passwordReCheck };
