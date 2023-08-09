export const EMAIL_REGEX = new RegExp(
  "^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$"
);
export const PW_REGEX = new RegExp(
  "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z0-9$@$!%*#?&]{8,20}$"
);

export const OPTIONS = [
  { value: "placeholder", name: "배송 요청사항을 선택해주세요" },
  { value: "option1", name: "배송전 연락바랍니다." },
  { value: "option2", name: "부재시 경비실에 맡겨주세요." },
  { value: "option3", name: "부재시 연락주세요." },
];

export const LOGIN_ERROR_RESULT = {
  requiredEmail: ["이메일을 입력해 주세요.", "email"],
  requiredPw: ["비밀번호를 입력해 주세요.", "password"],
  invalidEmail: ["이메일을 정확하게 입력해 주세요.", "email"],
  invalidPw: [
    "비밀번호가 올바르지 않습니다.(8~20자/영문자/숫자/특수문자)",
    "password",
  ],
};

export const SIGNUP_ERROR_RESULT = {
  requiredEmail: ["이메일을 입력해 주세요.", "email"],
  requiredUsername: ["이름을 입력해 주세요.", "nickname"],
  requiredPw: ["비밀번호를 입력해 주세요.", "password"],
  requiredConfirmPw: ["비밀번호 확인을 입력해 주세요.", "confirmPw"],
  invalidEmail: ["이메일을 정확하게 입력해 주세요.", "email"],
  invalidPw: [
    "비밀번호가 올바르지 않습니다.(8~20자/영문자/숫자/특수문자)",
    "password",
  ],
  invalidConfirmPw: ["비밀번호가 일치하지 않습니다.", "confirmPw"],
};

export const CHECKBOXDATA = [
  { id: 1, text: "구매조건 확인 및 결제 진행 동의" },
  { id: 2, text: "개인정보 제3자 제공 동의" },
];
