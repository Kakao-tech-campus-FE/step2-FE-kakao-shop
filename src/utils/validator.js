const emailValidate = (string) => {
  const regEM =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/;
  return regEM.test(string) && !string.includes(" ");
};

const passwordValidate = (string, type) => {
  const regPW =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!%*&^])[A-Za-z\d@#$!%*&^]{8,20}$/;

  return regPW.test(string) && !string.includes(" ");
};

export { emailValidate, passwordValidate };
