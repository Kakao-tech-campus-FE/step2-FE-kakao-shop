import { useState } from "react"

const EMAIL_REGEX = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$');
const PW_REGEX = new RegExp('^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$');

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [invalidCheck, setInvalidCheck] = useState(initialValue);
    
    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setValue((prev) => ({...prev, [name]: value}));
        handleOnCheck(e);
    };

    const checkRegex = (inputName, inputValue) => {
        let result
        if (value[inputName].length === 0) {
            result = 'required'
        } else {
            switch (inputName) {
                case 'email':
                    result = EMAIL_REGEX.test(inputValue) ? true : 'invalidEmail'
                    break
                case 'username':
                    result = true
                    break;
                case 'password':
                    result = PW_REGEX.test(inputValue) ? true : 'invalidPw'
                    if(value['passwordConfirm']) {
                        checkRegex('passwordConfirm', value['passwordConfirm'])
                    }
                    break
                case 'passwordConfirm':
                    result =
                        inputValue === value['password'] ? true : 'invalidConfirmPw'
                    break
                default:
                    return
            }
        }

        setInvalidCheck((prev) => ({ ...prev, [inputName]: result }))
    };

    const handleOnCheck = (e) => {
        const {name, value} = e.target;
        checkRegex(name, value);
    };

    return {value, invalidCheck, handleOnChange, handleOnCheck};
};

export default useInput;