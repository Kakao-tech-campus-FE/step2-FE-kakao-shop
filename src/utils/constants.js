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