export function emailValidation(value: string) {
  if (value.includes('@')) return true;
  return false;
}

export function passwordValidation(value: string) {
  const reg = /^(?!\s)(?=.*[1-9])(?=.*[A-Za-z])(?=.*[!@#$%%^&*])[1-9a-zA-Z!@#$%^&*]{8,20}$/g;
  return reg.exec(value);
}
