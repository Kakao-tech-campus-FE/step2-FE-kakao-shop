export const REGISTER_ERROR_MSG = {
  email: {
    DUPLICATE: '동일한 이메일이 존재합니다.',
    INVALID_FORMAT: '이메일 형식으로 작성해 주세요.',
    EMPTY: '필수 작성란 입니다.',
  },
  username: {
    INVALID_FORMAT: '2에서 16자 이내의 영문이어야 합니다.',
    EMPTY: '필수 작성란 입니다.',
  },
  password: {
    INVALID_LENGTH: '8에서 20자 이내여야 합니다.',
    INVALID_FORMAT: '영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다.',
    EMPTY: '필수 작성란 입니다.',
  },
  confirmPassword: {
    NOT_EQUAL: '비밀번호와 비밀번호 확인이 다릅니다.',
  },
};

export const LOGIN_ERROR_MSG = {
  email: {
    INVALID_FORMAT: '이메일 형식으로 작성해 주세요.',
    EMPTY: '이메일을 입력해 주세요.',
  },
  password: {
    INVALID_LENGTH: '8에서 20자 이내여야 합니다.',
    INVALID_FORMAT: '영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다.',
    EMPTY: '비밀번호를 입력해 주세요.',
  },
};

export const LOGIN_RESPONSE_ERROR_MSG_400 = '잘못된 이메일 또는 비밀번호 형식입니다.';
export const LOGIN_RESPONSE_ERROR_MSG_401 = '이메일 또는 비밀번호가 틀립니다.';
export const LOGIN_RESPONSE_ERROR_MSG_500 = '로그인 서버에 문제가 발생했습니다.';
