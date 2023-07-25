const ERROR_MSG = {
    required: "필수 입력 사항입니다.",
    invalidEmail: "이메일 형식이 유효하지 않습니다.",
    invalidPw: "8-20자 이내 영문 대소문자, 숫자, 특수문자를 입력하세요.",
    invalidConfirmPw: "비밀번호가 일치하지 않습니다.",
  };
  
  const ErrorMsg = ({ errorMsg, name }) => {
    return (
      <div className={`text-red-300 text-xs ${errorMsg[name] ? "mb-4" : ""}`}>
        {errorMsg[name] ? ERROR_MSG[errorMsg[name]] : null}
      </div>
    );
  };
  
  export default ErrorMsg;  