import { emailCheck } from '../services/api';

const LOGIN = [
    {
        id: 'email',
        type: 'email',
        placeholder: '이메일을 입력해주세요',
        label: '이메일',
        required: true,
        validation: {
            required: '이메일을 입력해주세요',
            pattern: {
                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
                message: '이메일 형식을 지켜 주세요',
            },
        },
    },
    {
        id: 'password',
        type: 'password',
        placeholder: '비밀먼호를 입력해주세요',
        label: '비밀번호',
        required: true,
        validation: {
            required: '비밀번호를 입력해주세요',
            pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
                message: '비밀번호는 숫자와 영어,특수문자 1글자 이상 포함합니다',
            },
        },
    },
];

const SIGNUP = [
    {
        id: 'username',
        type: 'text',
        placeholder: '이름을 입력해주세요',
        label: '이름',
        required: true,
        validation: {
            required: '이름을 입력해주세요',
        },
    },
    {
        id: 'email',
        type: 'email',
        placeholder: 'example@abc.com',
        label: '이메일',
        required: true,
        validation: {
            required: '이메일을 입력해주세요',
            checkUrl: async (value) => {
                try {
                    await emailCheck(value);
                } catch (error) {
                    return error.stack.includes('400') && '중복된 이메일입니다.';
                }
            },
            pattern: {
                value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
                message: '이메일 형식을 지켜 주세요',
            },
        },
    },
    {
        id: 'password',
        type: 'password',
        placeholder: '비밀먼호를 입력해주세요',
        label: '비밀번호',
        required: true,
        validation: {
            required: '비밀번호를 입력해주세요',
            pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/,
                message: '비밀번호는 숫자와 영어,특수문자 1글자 이상 포함합니다',
            },
        },
    },
    {
        id: 'passwordCheck',
        type: 'password',
        placeholder: '비밀먼호를 다시 입력해주세요',
        label: '비밀번호 확인',
        required: true,
        validation: {
            required: '비밀번호를 다시 입력해주세요',
            mismatch: '비밀번호가 일치하지 않습니다',
        },
    },
];

Object.freeze(LOGIN);
Object.freeze(SIGNUP);

export default { LOGIN, SIGNUP };
