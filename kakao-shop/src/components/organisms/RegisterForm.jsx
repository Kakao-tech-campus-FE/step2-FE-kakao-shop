import useInput from "../../hooks/useInput";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";

const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });

  const inputBoxStyle = `border-b border-solid py-2 mb-2 font-bold`;
  const inputLabelStyle = `block text-sm text-gray-800 mb-2 mt-2`;

  return (
    <Container className="border border-solid border-gray-300 p-16 mx-auto w-[570px]">
      <InputGroup
        id="email"
        type="email"
        value={value.email}
        placeholder="카카오메일 아이디, 이메일, 전화번호"
        label="이메일(아이디)"
        onChange={handleOnChange}
        className={`${inputBoxStyle}`}
        labelClassName={`${inputLabelStyle}`}
      />
      <InputGroup
        id="username"
        type="text"
        value={value.username}
        placeholder="이름"
        label="이름"
        onChange={handleOnChange}
        className={`${inputBoxStyle}`}
        labelClassName={`${inputLabelStyle}`}
      />
      <InputGroup
        id="password"
        type="password"
        value={value.password}
        placeholder="비밀번호"
        label="비밀번호"
        onChange={handleOnChange}
        className={`${inputBoxStyle}`}
        labelClassName={`${inputLabelStyle}`}
      />
      <InputGroup
        id="passwordConfirm"
        type="password"
        value={value.passwordConfirm}
        placeholder="비밀번호 확인"
        label="비밀번호 확인"
        onChange={handleOnChange}
        className={`${inputBoxStyle}`}
        labelClassName={`${inputLabelStyle}`}
      />
      <Button color="kakao" className="mt-12">
        회원가입
      </Button>
    </Container>
  );
};

export default RegisterForm;
