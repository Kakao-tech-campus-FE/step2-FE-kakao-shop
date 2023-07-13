// 이메일, 비밀번호 유효성 검사
// 이메일 : 이메일 형식으로 작성
// 비밀번호 : 8-20자
const emailRegEx = new RegExp(
  "^[A-Za-z0-9-_.]+@([A-Za-z0-9-_.]+.)+[A-Za-z0-9_]{2,4}$"
);
const passwordRegEx = new RegExp(
  "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,20}$"
);

export const emailValidCheck = (email) => {
  return emailRegEx.test(email);
};
export const pwValidCheck = (pw) => {
  return passwordRegEx.test(pw);
};
