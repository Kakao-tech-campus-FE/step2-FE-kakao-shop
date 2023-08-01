import { useState, useEffect } from 'react';

const useInput = (initialValue) => {
  // const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPwOk, setIsPwOk] = useState(false);
  const [isEmailOk, setIsEmailOk] = useState(false);
  const [isAllOk, setIsAllOk] = useState(false);

  // 이메일 유효성 검사
  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    return emailRegex.test(email);
  };
  // 비밀번호 유효성 검사
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    return passwordRegex.test(password);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
    // setLoading(false);
  };

  const handlePwChange = (e) => {
    const { name, value } = e.target;
    if (!validatePassword(value)) {
      setPasswordError(
        ' 비밀번호는 영문, 숫자, 특수문자를 포함하여 8~20자로 입력해주세요.',
      );
      setIsPwOk(false);
    } else {
      setPasswordError('');
      setIsPwOk(true);
    }
    setValue((prev) => ({ ...prev, [name]: value }));
    // setLoading(false);
  };

  const handleEmailChange = (e) => {
    const { name, value } = e.target;
    if (!validateEmail(value)) {
      setEmailError(' 올바른 이메일 형식이 아닙니다.');
      setIsEmailOk(false);
    } else {
      setEmailError('');
      setIsEmailOk(true);
    }

    setValue((prev) => ({ ...prev, [name]: value }));
    // setLoading(false);
  };

  useEffect(() => {
    setIsAllOk(isPwOk && isEmailOk);
  }, [isPwOk, isEmailOk]);

  // if (isPwOk && isEmailOk){
  //   setIsAllOk(true);
  // }else{
  //   setIsAllOk(false);
  // }
  return {
    value,
    handleOnChange,
    emailError,
    passwordError,
    handlePwChange,
    handleEmailChange,
    isAllOk,
  };
};

export default useInput;
