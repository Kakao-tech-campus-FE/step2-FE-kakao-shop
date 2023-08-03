import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { register } from "../../services/user";
import { useState } from "react";
import Title from "../atoms/Title";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "../atoms/Box";

const staticServerUri = process.env.REACT_APP_PATH || "";

const RegisterForm = (props) => {
  // const { value, handleOnChange } = useInput({   username: "",   email: "",
  // password: "",   passwordCheck: "", });

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [idError, setIdError] = useState("");
  // const [pwError, setPwError] = useState('');
  // const [pwCheckError, setPwCheckError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await register({
        email: email,
        password: password,
        username: name,
      });
      if (response.data.success === true) {
        // 성공적으로 로그인한 경우 메인 페이지로 이동
        alert("정상적으로 회원가입 되었습니다.");
        navigate(staticServerUri + "/");
      } else {
        // 로그인 실패 처리
        console.error("sign up failed");
      }
    } catch (error) {
      // 오류 처리
      console.error(error);
      // 로그인 요청 실패 처리
      console.error("register request failed");
    }
  };

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onPasswordCheckHandler = (e) => {
    setPasswordCheck(e.currentTarget.value);
  };

  const ID_REGEX =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const handleID = (e) => {
    if (e.currentTarget.value.length === 0) {
      console.log("필수 정보입니다. ");
    } else if (ID_REGEX.test(e.currentTarget.value)) {
      console.log("good");
    } else console.log("이메일 형식으로 입력해주세요. ");
  };

  const PW_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;

  const handlePW = (e) => {
    if (e.currentTarget.value.length === 0) {
      console.log("필수 정보입니다. ");
    } else if (PW_REGEX.test(e.currentTarget.value)) {
      console.log("good");
    } else
      console.log(
        "8에서 20자 이내로 영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다"
      );
  };

  const handlePWCHECK = (e) => {
    if (e.currentTarget.value.length === 0) {
      console.log("필수 정보입니다. ");
    } else if (e.currentTarget.value !== password) {
      console.log("비밀번호가 일치하지 않습니다. ");
    }
  };

  return (
    <Container>
      <div className=" registerform relative bottom-40">
        <Title className="min-h-[50px]">CaCao</Title>
        <Box className=" mt-20 min-w-[700px] max-h-[600px]">
          <InputGroup
            className="mt-20 mb-4"
            id="email"
            type="email"
            placeholder="이메일 (아이디)"
            value={email}
            onChange={onEmailHandler}
            onBlur={handleID}
            name="email"
          />
          {/* 기능 구현  */}
          <button className="border border-3 text-gray-500 text-sm font-bold h-10 min-w-[100%] bg-gray-100">
            이메일 중복 확인
          </button>
          <InputGroup
            className="mb-4"
            id="username"
            type="text"
            placeholder="이름"
            value={name}
            onChange={onNameHandler}
            name="username"
          />

          <InputGroup
            className="mb-4"
            id="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onPasswordHandler}
            onBlur={handlePW}
            name="password"
          />
          <InputGroup
            className="mb-32"
            id="passwordCheck"
            type="password"
            placeholder="비밀번호 확인"
            value={passwordCheck}
            onChange={onPasswordCheckHandler}
            onBlur={handlePWCHECK}
            name="passwordCheck"
          />
          <Button className="mb-20" onClick={handleRegister}>
            회원가입
          </Button>
        </Box>
      </div>
    </Container>
  );
};

export default RegisterForm;
