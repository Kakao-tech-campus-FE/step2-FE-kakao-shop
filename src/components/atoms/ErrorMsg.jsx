import * as Error from '../../styles/atoms/ErrorMsg';

const ERROR_MSG = {
    required: '필수 정보입니다.',
    invalidEmail:
        '이메일 형식이 알맞지 않습니다.',
    invalidPw: '8~20자 영문 대 소문자, 숫자, 득수문자를 사용하세요.',
    invalidConfirmPw: '비밀번호가 일치하지 않습니다.',
}

const ErrorMsg = ({errorMsg, name}) => {
    return(
        <Error.Msg >{errorMsg[name] ? ERROR_MSG[errorMsg[name]] : null}</Error.Msg>
    );
};

export default ErrorMsg;