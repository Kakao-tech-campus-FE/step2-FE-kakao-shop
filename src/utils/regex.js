export const EMAIL_REGEX = new RegExp(
  "^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z0-9]+$"
);
export const PW_REGEX = new RegExp(
  "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*#?&])[A-Za-z0-9$@$!%*#?&]{8,20}$"
);
