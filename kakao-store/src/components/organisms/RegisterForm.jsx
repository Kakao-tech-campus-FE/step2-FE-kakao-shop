import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import useInput from '../../hooks/useinput';
import Title from '../atoms/Title';
import { validateForm } from '../../utils/VaildationSignup';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/user';
import { useState } from 'react';
import logo from '../../images/logoKakaoText.png';
// import useRegister from "../../hooks/useRegister";

/**
 * 회원가입 폼 컴포넌트
 * 이메일, 이름, 비밀번호, 비밀번호 확인을 입력받아 회원가입을 시도하는 컴포넌트
 *
 * @returns {JSX.Element} - 회원가입 폼
 */

const RegisterForm = () => {
  const navigate = useNavigate();

  const { value, handleOnChange } = useInput({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  // const { errors, handleRegister  } = useRegister();
  const [errors, setErrors] = useState([]);

  const handleRegister = () => {
    const validationErrors = validateForm(value);

    if (!validationErrors) {
      register({
        email: value.email,
        password: value.password,
        username: value.username,
      });
      navigate('/');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <Container>
      <Title>
        <img src={logo} alt="logo" />
      </Title>
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일"
        label="이메일 (아이디)"
        value={value.email}
        onChange={handleOnChange}
      />

      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="이름"
        label="이름 "
        value={value.username}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="비밀번호"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />

      {errors.map((error, index) => (
        <div className="bg-gray-50 p-2">
          <p className=" text-sm font-medium text-red-500" key={index}>
            {error}
          </p>
        </div>
      ))}

      <Button
        onClick={handleRegister}
        className={'my-8 w-full rounded bg-yellow-300 px-4 py-3 font-semibold hover:bg-yellow-400'}
      >
        회원가입
      </Button>
    </Container>
  );
};

export default RegisterForm;
