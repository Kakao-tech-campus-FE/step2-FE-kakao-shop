import FORM_INFO from '../constants/FORM_INFO';

const info = FORM_INFO.SIGNUP;

const validationSingUPForm = async ({ username, email, password, passwordCheck }) => {
    const errors = {};

    const usernameValidation = info.find((e) => e.id === 'username').validation;
    const emailValidation = info.find((e) => e.id === 'email').validation;
    const passwordValidation = info.find((e) => e.id === 'password').validation;
    const passwordCheckValidation = info.find((e) => e.id === 'passwordCheck').validation;

    // username
    if (!username) {
        errors.username = usernameValidation.required.message;
    }

    // email
    let emailCheckUrl = '';
    if (!email) {
        errors.email = emailValidation.required.message;
    } else if (!emailValidation.pattern.value.test(email)) {
        errors.email = emailValidation.pattern.message;
    } else {
        try {
            emailCheckUrl = await emailValidation.checkUrl({ email: email });
            if (emailCheckUrl.length > 0) {
                errors.email = emailCheckUrl;
            }
        } catch (error) {
            console.log(error);
            // 에러 처리
        }
    }

    // password
    if (!password) {
        errors.password = passwordValidation.required.message;
    } else if (!passwordValidation.pattern.value.test(password)) {
        errors.password = passwordValidation.pattern.message;
    }

    if (!passwordCheck) {
        errors.passwordCheck = passwordCheckValidation.required.message;
    } else if (password !== passwordCheck) {
        errors.passwordCheck = passwordCheckValidation.mismatch.message;
    }

    return errors;
};

export default validationSingUPForm;
