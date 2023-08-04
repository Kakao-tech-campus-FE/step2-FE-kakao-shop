import FORM_INFO from '../constants/FORM_INFO';

const info = FORM_INFO.SIGNUP;

const validationLoginForm = ({ email, password }) => {
    const errors = {};

    const emailValidation = info.find((e) => e.id === 'email').validation;
    const passwordValidation = info.find((e) => e.id === 'password').validation;

    // email
    if (!email) {
        errors.email = emailValidation.required.message;
    } else if (!emailValidation.pattern.value.test(email)) {
        errors.email = emailValidation.pattern.message;
    }

    // password
    if (!password) {
        errors.password = passwordValidation.required.message;
    } else if (!passwordValidation.pattern.value.test(password)) {
        errors.password = passwordValidation.pattern.message;
    }

    return errors;
};

export default validationLoginForm;
