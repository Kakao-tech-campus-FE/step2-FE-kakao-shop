export const REGISTER_VALID_REGEX = {
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  username: /^[A-Za-z]{2,16}$/,
  password_format: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()\-_=+])[A-Za-z\d~!@#$%^&*()\-_=+]*$/,
  password_length: /^.{8,20}$/,
};

export const LOGIN_VALID_REGEX = {
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  password_format: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()\-_=+])[A-Za-z\d~!@#$%^&*()\-_=+]*$/,
  password_length: /^.{8,20}$/,
};
