// validation.js

export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,20}$/;
    return passwordRegex.test(password);
  };
  