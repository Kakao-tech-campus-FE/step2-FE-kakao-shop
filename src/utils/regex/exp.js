export const emailExp = (email) => {
  const emailCheck = new RegExp(
    "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
  );

  return emailCheck.test(email);
};

export const passwordExp = (password) => {
  const pwRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/i;
  const passwordCheck = new RegExp(pwRegex);
  return passwordCheck.test(password);
};

export const nameExp = (name) => {
  if (name.length !== 0) return true;
  return false;
};

//이메일. 이름. 비밀번호 유효성 검사 정규 표현식
