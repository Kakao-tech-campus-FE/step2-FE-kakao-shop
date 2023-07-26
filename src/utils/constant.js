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
