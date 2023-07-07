const SIGN_IN = [
  {
    id: "email",
    label: "이메일",
    type: "text",
    placeholder: "abc123@example.com",
    validation: {
      required: "이메일을 입력해 주세요",
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "이메일 형식을 작성해 주세요",
      },
    },
  },
  {
    id: "password",
    label: "비밀번호",
    type: "password",
    placeholder: "qwer1234!",
    validation: {
      required: "비밀번호를 입력해 주세요",
      pattern: {
        value:
          /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=\-{}[\]|\\:;"'<>,.?/~`])[\S]{8,20}$/,
        message: "영문, 숫자, 특수문자 모두 포함",
      },
      minLength: { value: 8, message: "비밀번호는 8글자 이상입니다" },
      maxLength: { value: 20, message: "비밀번호는 20글자 이내입니다" },
    },
    requireMsg: "8글자 ~ 20글자 영문, 숫자, 특수문자 모두 포함",
  },
];

Object.freeze(SIGN_IN);
export default { SIGN_IN };
