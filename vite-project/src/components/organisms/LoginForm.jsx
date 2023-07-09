import Container from '../atoms/Container';
import InputGroup from '../molecules/InputGroup';
import Button from '../atoms/Button';
import useInput from '../../hooks/userInput';
import { login } from '../../services/api';
import Title from '../atoms/Title';
import { useDispatch } from 'react-redux';
import { setEmail } from '../../store/slices/userSlice';

const LoginForm = () => {
  // const dispatch = useDispatch();
  // 위 코드에서 오류가 난다. 이유를 모르겠다.
  // const email = useSelector((state) => state.user.email);

  const { value, handleOnChange, loading } = useInput({
    email: '',
    password: '',
  });

  const loginReq = () => {
    login({
      email: value.email,
      password: value.password,
    })
      .then((res) => {
        console.log(res);
        dispatch(
          setEmail({
          email: value.email,
        })
        );
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Container>
      <Title>로그인</Title>
      {/* <span>{email}</span> */}
      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)을 입력해주세요."
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="*******"
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <Button
        onClick={() => {
          // api 로그인 요청
          loginReq();
        }}
      >
        로그인
      </Button>
    </Container>
  );
};

export default LoginForm;
