const validateEmail = (email) => {
  const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/i;
  if (emailRegex.test(email)) {
    return true;
  } else {
    window.alert("이메일 주소가 잘못되었습니다. 올바른 이메일 주소를 입력해주세요.");
    return false;
  }
};

const validatePassword = (password) => {
  const pwRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/i;
  if (pwRegex.test(password)) {
    return true;
  } else {
    window.alert("비밀번호는 하나 이상의 영문자, 숫자, 특수문자를 포함해야 하며 8~20자리여야 합니다. ");
    return false;
  }
};

export const validateSignup = ( {"email": email, "password": password, "passwordConfirm": passwordConfirm} ) => {

  if (password !== passwordConfirm) {
    window.alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
    return false;
  }

  return (validateEmail(email) && validatePassword(password));
}

export const validateLogin = ( {"email": email, "password": password} ) => {
  return (validateEmail(email) && validatePassword(password));
}