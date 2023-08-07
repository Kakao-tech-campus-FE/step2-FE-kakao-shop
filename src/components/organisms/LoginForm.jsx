import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import { login } from "../../services/user";
import { useEffect, useState } from "react";
import Title from "../atoms/Title";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/userSlice";
import Box from "../atoms/Box";

const staticServerUri = process.env.REACT_APP_PATH || "";
const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await login({
        email: email,
        password: password,
      });

      if (response.data.success === true) {
        // 성공적으로 로그인한 경우 메인 페이지로 이동
        dispatch(
          loginUser({
            email: email,
            username: user.username,
          })
        );
        navigate(staticServerUri + "/");

        // 메인 페이지로 이동
      } else {
        // 로그인 실패 처리
        console.error("로그인 실패");
      }
    } catch (error) {
      // 오류 처리
      console.error(error);

      // 로그인 요청 실패 처리
      console.error("로그인 요청이 실패하였습니다.");
    }
  };

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const ID_REGEX =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const handleID = (e) => {
    // 포커스 이벤트 처리 로직을 여기에 작성합니다.
    console.log("입력 필드에 포커스되었습니다.");
    if (e.currentTarget.value.length === 0) {
      console.log("필수 정보입니다. ");
    } else if (ID_REGEX.test(e.currentTarget.value)) {
      console.log("good");
    } else console.log("이메일 형식으로 입력해주세요. ");
  };

  const PW_REGEX =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;

  const handlePW = (e) => {
    // 포커스 이벤트 처리 로직을 여기에 작성합니다.
    console.log("입력 필드에 포커스되었습니다.");
    if (e.currentTarget.value.length === 0) {
      console.log("필수 정보입니다. ");
    } else if (PW_REGEX.test(e.currentTarget.value)) {
      console.log("good");
    } else
      console.log(
        "8에서 20자 이내로 영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다"
      );
  };

  return (
    <Container>
      <div className="loginform relative bottom-40">
        <Title className="min-h-[50px]">CaCao</Title>
        <Box className="inputform mt-20 min-w-[700px]">
          <InputGroup
            className="mt-20 mb-4"
            id="email"
            type="email"
            placeholder="카카오메일 아이디, 이메일, 전화번호"
            // label="아이디"
            value={email}
            onChange={onEmailHandler}
            onBlur={handleID}
            name="email"
          />
          <InputGroup
            className="mb-32"
            id="password"
            type="password"
            placeholder="비밀번호"
            // label="비밀번호"
            value={password}
            onChange={onPasswordHandler}
            onBlur={handlePW}
            name="password"
          />
          <Button onClick={handleLogin}>로그인</Button>
          <br />
          <br />
          <br />
          <Link
            to={staticServerUri + "/signup"}
            style={{ textDecoration: "none", color: "black", fontSize: "16px" }}
          >
            회원가입
          </Link>
          <br />
          <br />
        </Box>
      </div>
    </Container>
  );
};

export default LoginForm;
