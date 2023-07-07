type valueType = 'username' | 'email' | 'password' | 'passwordConfirm';

const isEmpty = (value: string) => value.trim().length === 0;

const usernameValidator = (value: string) => {
  if (isEmpty(value)) {
    return {
      isValid: false,
      message: '이름을 입력해주세요',
    };
  }
  return { isValid: true, message: '' };
};

const emailValidator = (value: string) => {
  const pattern = /^([a-zA-Z0-9]+)@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  if (isEmpty(value)) {
    return {
      isValid: false,
      message: '이메일을 입력해주세요',
    };
  }
  if (!pattern.test(value)) {
    return {
      isValid: false,
      message: '이메일 형식으로 작성해주세요',
    };
  }
  return { isValid: true, message: '' };
};

const passwordValidator = (value: string) => {
  const pattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
  if (isEmpty(value)) {
    return {
      isValid: false,
      message: '비밀번호를 입력해주세요',
    };
  }
  if (!pattern.test(value)) {
    return {
      isValid: false,
      message: '영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다',
    };
  }
  return { isValid: true, message: '' };
};

const passwordConfirmValidator = (value: string, password?: string) => {
  if (isEmpty(value)) {
    return {
      isValid: false,
      message: '비밀번호 확인란을 입력해주세요',
    };
  }
  if (!(value === password)) {
    return {
      isValid: false,
      message: '비밀번호와 다릅니다.',
    };
  }
  return { isValid: true, message: '' };
};

const checkSignUpValidation = ({ type, value, password }: { type: valueType; value: string; password?: string }) => {
  if (type === 'username') return usernameValidator(value);
  if (type === 'email') return emailValidator(value);
  if (type === 'password') return passwordValidator(value);
  if (type === 'passwordConfirm') return passwordConfirmValidator(value, password);
  return { isValid: true, message: '' };
};

export { isEmpty, checkSignUpValidation };
