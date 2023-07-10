import {createSlice} from '@reduxjs/toolkit';

const PW_REGEX = new RegExp("^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$");
const EMAIL_REGEX = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
const NAME_REGEX = new RegExp("^[가-힣]{2,}$");

const ERROR_MSG = {
    required: "필수 입력사항입니다.",
    password: "8~20자 영문 대 소문자, 특수문자(!@#$%^*+=-)를 사용하세요.",
    passwordConfirm: "비밀번호가 일치하지 않습니다.",
    email: "이메일 형식이 올바르지 않습니다.",
    username: "이름은 2자 이상이어야 합니다.",
};

export const registerSlice = createSlice({
    name: 'registerForm',
    initialState: {
        email: {
            value: "",
            errorMsg: "",
            isValid: false,
            constraint: (value) => EMAIL_REGEX.test(value)
        },
        username: {
            value: "",
            errorMsg: "",
            isValid: false,
            constraint: (value) => NAME_REGEX.test(value)
        },
        password: {
            value: "",
            errorMsg: "",
            isValid: false,
            constraint: (value) => PW_REGEX.test(value)
        },
        passwordConfirm: {
            value: "",
            errorMsg: "",
            isValid: false,
            constraint: (value) => {
                return value === this.password.value
            }
        }
    },
    reducers: {
        setEmail: (state, action) => {
            state.email.value = action.payload;
        },
        setUsername: (state, action) => {
            state.username.value = action.payload;
        },
        setPassword: (state, action) => {
            state.password.value = action.payload;
        },
        setPasswordConfirm: (state, action) => {
            state.passwordConfirm.value = action.payload;
        },
        validate: (state, action) => {
            const id = action.payload.id;
            const value = state[id].value;

            const constraint = id === "passwordConfirm"?
                (input) => input === state.password.value:state[id].constraint
            if (value === "") {
                state[id].errorMsg = ERROR_MSG.required;
                state[id].isValid = false;
            } else if (!constraint(value)) {
                state[id].errorMsg = ERROR_MSG[id];
                state[id].isValid = false;
            } else {
                state[id].errorMsg = ""
                state[id].isValid = true;
            }
        }
    }
});

export const {setEmail, setUsername, setPassword, setPasswordConfirm, validate} = registerSlice.actions;
export default registerSlice.reducer;