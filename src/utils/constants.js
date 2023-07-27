// 상수 관리 파일

// 이메일과 비밀번호에 대한 유효성 검증 일부를 프론트 단에서 진행
// 이메일 : 이메일 형식으로 작성
// 비밀번호 : 영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없음, 8에서 20자 이내
// emailValidation & pwValidation : LoginForm & RegisterForm에서 사용
// eslint-disable-next-line
export const emailValidation = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
export const pwValidation = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/;
export const emailErrorMessage = {
    icon:'error',
    title:'이메일이 올바르지 않습니다!',
    text:'이메일을 이메일에 맞는 올바른 형식으로 작성해주세요!',
    confirmButtonText:'확인',
}
export const passwordErrorMessage = {
    icon:'error',
    title:'비밀번호가 올바르지 않습니다!',
    text:'비밀번호는 영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없으며, 8에서 20자 이내로 작성해주세요!',
    confirmButtonText:'확인',
}
export const usernameErrorMessage = {
    icon:'error',
    title:'이름을 입력해주세요!',
    text:'이름을 입력하지 않으셨습니다',
    confirmButtonText:'확인',
}
export const passwordComparisonErrorMessage = {
    icon:'error',
    title:'입력하신 비밀번호와 비밀번호 확인이 서로 다릅니다.',
    text:'다시 한 번 입력해주세요',
    confirmButtonText:'확인',
}
export const logoutMessage = {
    title:'로그아웃 완료!',
    text:'우리 다음에 또 만나요 :) ',
    confirmButtonText:'확인',
    confirmButtonColor:'#3085d6',
}
export const registerWelcomeMessage = {
    title:'회원가입 완료!',
    text: '저희 사이트에 오신 것을 환영합니다😊',
    confirmButtonText:'확인',
}
export const cartSuccessMessage = {
    title:'장바구니 담기 성공!',
    text: '다른 상품도 더 둘러보시겠어요?😄',
    confirmButtonText:'확인',
}
export const cartLoginNeedMessage = {
    title:'로그인이 먼저 필요해요!',
    text: '상품을 담기 전 로그인을 먼저 해주세요!😊',
    confirmButtonText:'확인',
}
export const cartFailedMessage = {
    title:'장바구니 담기 실패..😭',
    text: '무슨 문제가 있는 것 같습니다!',
    confirmButtonText:'확인',
}

export const clearTokens = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("tokenExpiration");
}