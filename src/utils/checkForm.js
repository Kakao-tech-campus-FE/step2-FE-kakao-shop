const checkValid = (string, type) => {
  const regPW =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!%*&^])[A-Za-z\d@#$!%*&^]{8,20}$/;

  const regEM =
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$/;

  if (type == "password") {
    return regPW.test(string) && !string.includes(" ");
  } else {
    return regEM.test(string) && !string.includes(" ");
  }
};

export default checkValid;
