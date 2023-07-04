import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup"
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { register } from "../../apis/api";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const [value, handleOnChange] = useInput({
    username:'',
    usernameIsValid:'',
    email:'',
    emailIsValid: '',
    password:'',
    passwordIsValid: '',
    passwordConfirm:'',
  })

  const validateCheck = () => {
    return (
      /^[a-zA-Z0-9]{4,12}$/.test(value.username) &&
      /^[a-zA-Z0-9]+@[a-zA-Z]+\.com$/.test(value.email) &&
      /^[a-zA-Z0-9]{4,12}$/.test(value.password) &&
      value.password === value.passwordConfirm
    )
  }
  const navigate = useNavigate();
  return (
    <Container>
      <Title>회원가입 페이지</Title>
      <InputGroup id="username" type="text" placeholder="사용자 이름" label="이름" value={value.username} onChange={handleOnChange}/>
      {!value.username && <span className="text-black-500 text-xs block">이름을 입력해주세요</span>}
      {value.username && (
        value.usernameIsValid ? (
          <span className="text-green-500 text-xs block">이름이 유효합니다</span>
        ) : (
          <span className="text-red-500 text-xs block">이름이 유효하지 않습니다</span>
        )
      )}
      <InputGroup id="email" type="email" placeholder="이메일" label="이메일" value={value.email} onChange={handleOnChange}/>
      {!value.email && <span className="text-black-500 text-xs block">이메일을 입력해주세요</span>}
      {value.email && (
        value.emailIsValid ? (
          <span className="text-green-500 text-xs block">이메일이 유효합니다</span>
        ) : (
          <span className="text-red-500 text-xs block">이메일이 유효하지 않습니다</span>
        )
      )}
      <InputGroup id="password" type="password" placeholder="비밀번호"  label="비밀번호" value={value.password} onChange={handleOnChange}/>
      {!value.password && <span className="text-black-500 text-xs block">비밀번호를 입력해주세요</span>}
      {value.password && (
        value.passwordIsValid ? (
          <span className="text-green-500 text-xs block">비밀번호가 유효합니다</span>
        ) : (
          <span className="text-red-500 text-xs block">비밀번호가 유효하지 않습니다</span>
        )
      )}
      <InputGroup id="passwordConfirm" type="password" placeholder="비밀번호 확인"  label="비밀번호 확인" value={value.passwordConfirm} onChange={handleOnChange}/>
      {value.passwordConfirm && (value.password === value.passwordConfirm
        ? (
          <span className="text-green-500 text-xs block">비밀번호가 동일합니다</span>
        ) : (
          <span className="text-red-500 text-xs block">비밀번호가 동일하지 않습니다</span>
        )
      )}
      <Button
        onClick={() => {
          if(!value.usernameIsValid || !value.emailIsValid || !value.passwordIsValid || value.password !== value.passwordConfirm)
            return
          navigate('/main')
          register({
            email:value.email,
            username: value.username,
            password: value.password
          })
        }}>회원가입</Button>
    </Container>
  );
}

export default RegisterForm;