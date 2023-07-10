const isValidEmpty = (values) => {
  if (!Object.values(values).every((val) => val !== "")) {
    alert("비어 있을 수 없습니다.");
    return false;
  }
  return true;
};

const isValidEmail = (email) => {
  if (!RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/).test(email)) {
    alert("이메일 형식으로 작성해주세요.");
    return false;
  }
  return true;
};

const isValidPasswordLength = (password) => {
  if (!RegExp(/^.{8,20}$/).test(password)) {
    alert("비밀번호는 8에서 20자 이내여야 합니다.");
    return false;
  }
  return true;
};

const isValidPasswordChar = (password) => {
  if (
    !RegExp(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[^ ]+$/
    ).test(password)
  ) {
    alert(
      "비밀번호는 영문, 숫자, 특수문자가 포함되어야 하고 공백이 포함될 수 없습니다."
    );
    return false;
  }
  return true;
};

const isValidConfirmPassword = (confirmPassword, password) => {
  if (confirmPassword !== password) {
    alert("비밀번호와 비밀번호 확인이 같아야 합니다.");
    return false;
  }
  return true;
};

// export
export const isValidSignUp = (values) => {
  const { email, password, confirmPassword } = values;
  return (
    isValidEmpty(values) &&
    isValidEmail(email) &&
    isValidPasswordLength(password) &&
    isValidPasswordChar(password) &&
    isValidConfirmPassword(confirmPassword, password)
  );
};

export const isValidLogIn = (values) => {
  const { email, password } = values;
  return (
    isValidEmpty(values) &&
    isValidEmail(email) &&
    isValidPasswordLength(password) &&
    isValidPasswordChar(password)
  );
};
