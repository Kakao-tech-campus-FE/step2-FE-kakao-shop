import { useState } from 'react';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;

const useValid = () => {
  const [valid, setValid] = useState({});

  const validateForm = (values) => {
    let errors = {};

    if (!values.username) {
      errors.username = '이름을 입력해주세요.';
    }

    if (!values.email) {
      errors.email = '이메일(아이디)을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = '이메일 형식으로 입력해주세요.';
    }

    if (!values.password) {
      errors.password = '비밀번호를 입력해주세요.';
    } else if (values.password.length < 8) {
      errors.password = '비밀번호는 8자 이상이어야 합니다.';
    }

    if (!values.passwordConfirm) {
      errors.passwordConfirm = '비밀번호 확인을 입력해주세요.';
    } else if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
    }

    setValid(errors);
    return Object.keys(errors).length === 0;
  };

  return { valid, validateForm };
};

export default useValid;