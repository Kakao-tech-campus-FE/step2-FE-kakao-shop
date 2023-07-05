export const validateForm = (value) => {
  let error = false;

  if (!testUsername(value)) {
    error = true;
  }

  if (!testPassword(value)) {
    error = true;
  }

  if (!testPasswordConfirm(value)) {
    error = true;
  }

  if (!testEmail(value)) {
    error = true;
  }

  return error;
};

const testUsername = (value) => {
  if (value.username.length < 2) {
    console.log("이름은 2글자 이상이어야 합니다.");
    return false;
  } else {
    return true;
  }
};

const testPassword = (value) => {
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]+$/;

  if (value.password.length < 8) {
    console.log("비밀번호는 8글자 이상이어야 합니다.");
    return false;
  } else if (!passwordRegex.test(value.password)) {
    console.log("영문, 숫자, 특수문자가 포함되어야 합니다. ");
    return false;
  } else if (value.password.includes(" ")) {
    console.log("비밀번호의 공백이 존재합니다.");
    return false;
  } else {
    return true;
  }
};

const testPasswordConfirm = (value) => {
  if (value.password !== value.passwordConfirm) {
    console.log("비밀번호가 일치하지 않습니다.");
    return false;
  } else {
    return true;
  }
};

const testEmail = (value) => {
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // Regular expression for email validation

  if (emailRegex.test(value.email)) {
    return true;
  } else {
    console.log("이메일 형식이 올바르지 않습니다.");
    return false;
  }
};
