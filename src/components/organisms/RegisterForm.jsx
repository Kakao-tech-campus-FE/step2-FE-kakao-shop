import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import useInput from '../../hooks/useInput';
import { register } from '../../services/api';

const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  return (
    <Container>
      <InputGroup
        id="username"
        name="username"
        type="text"
        value={value.username}
        onChange={handleOnChange}
        placeholder="사용자 이름"
        className="border border-solid border-gray-300 rounded-md p-4 mb-4 bg-white shadow-md"
        label="이름"
      />
      <InputGroup
        id="email"
        name="email"
        type="email"
        value={value.email}
        onChange={handleOnChange}
        placeholder="이메일"
        className="border border-solid border-gray-300 rounded-md p-4 mb-4 bg-white shadow-md"
        label="이메일(아이디)"
      />
      <InputGroup
        id="password"
        name="password"
        type="password"
        value={value.password}
        onChange={handleOnChange}
        placeholder="비밀번호"
        className="border border-solid border-gray-300 rounded-md p-4 mb-4 bg-white shadow-md"
        label="비밀번호"
      />
      <InputGroup
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        value={value.passwordConfirm}
        onChange={handleOnChange}
        placeholder="비밀번호 확인"
        className="border border-solid border-gray-300 rounded-md p-4 mb-4 bg-white shadow-md"
        label="비밀번호 확인"
      />
      <Button
        onClick={async () => {
          try {
            // api 회원가입 요청
            await register({
              email: value.email,
              password: value.password,
              username: value.username,
            });

            // 회원가입 성공 후에 수행할 작업
            // 예: 리디렉션, 알림 메시지 등
          } catch (error) {
            // 회원가입 실패 처리
            console.error(error);
          }
        }}
      >
        회원가입
      </Button>
    </Container>
  );
};

export default RegisterForm;
