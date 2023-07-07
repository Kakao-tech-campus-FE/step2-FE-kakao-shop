const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
const emailFormPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordLenthPattern = /^[^].{8,25}$/;

const checkUsername = (username: string) => {
  if (username.length <= 0) {
    return '필수 항목입니다.';
  }
  return '';
};

const checkEmail = (email: string) => {
  if (!emailFormPattern.test(email)) {
    return '이메일 형식을 따라야 합니다.';
  }
  return '';
};

const checkPassword = (password: string) => {
  if (!passwordLenthPattern.test(password)) {
    return '8-25자로 작성해주세요';
  }
  if (!passwordPattern.test(password)) {
    return '영문, 숫자, 특수문자가 포함되어야 합니다.';
  }
  return '';
};

export { checkUsername, checkEmail, checkPassword };
