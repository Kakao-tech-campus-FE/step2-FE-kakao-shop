const testPassword = (value) => {
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]+$/;

  if (value.password.length < 8) {
    return "비밀번호는 8글자 이상이어야 합니다.";
  } else if (!passwordRegex.test(value.password)) {
    return "영문, 숫자, 특수문자가 포함되어야 합니다. ";
  } else if (value.password.includes(" ")) {
    return "비밀번호의 공백이 존재합니다.";
  } else {
    return false;
  }
};

const testUsername = (value) => {
  if (value.username.length < 2) {
    return "이름은 2글자 이상이어야 합니다.";
  } else {
    return false;
  }
};

const testPasswordConfirm = (value) => {
  if (value.passwordConfirm === "") {
    return "비밀번호 확인을 입력해주세요.";
  } else if (value.password !== value.passwordConfirm) {
    return "비밀번호가 일치하지 않습니다.";
  } else {
    return false;
  }
};

const testEmail = (value) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // Regular expression for email validation

  if (emailRegex.test(value.email)) {
    return false;
  } else if (value.email === "") {
    return "이메일을 입력해주세요.";
  } else {
    return "이메일 형식이 올바르지 않습니다.";
  }
};

export const validateForm = (value) => {
  const errors = [];

  if (testEmail(value)) {
    errors.push(testEmail(value));
    return errors;
  }

  if (testUsername(value)) {
    errors.push(testUsername(value));
    return errors;
  }

  if (testPassword(value)) {
    errors.push(testPassword(value));
    return errors;
  }
  
  if (testPasswordConfirm(value)) {
    errors.push(testPasswordConfirm(value));
    return errors;
  }

  if (errors.length === 0) {
    return false;
  } else {
    return errors;
  }
};