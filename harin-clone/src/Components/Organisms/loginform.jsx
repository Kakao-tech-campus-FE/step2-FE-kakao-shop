import Container from "../Atoms/Container";
import Button from "../Atoms/Button";
import InputGroup from "../Molecules/InputGroup";
import { login, checkUnique } from "../../Servicies/user";
import useInput from "../../Hooks/useinput";
import Box from "../Atoms/Box";
import { loginRequest, setEmail } from "../../Store/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();

  const inputStyle = "text-justify items-center m-3 p-3 border-solid border-2 rounded";

  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  const validAll = () => {
    if (value.email && value.password) {
      return false;
    } else {
      return true;
    }
  };

  const navigate = useNavigate();
  // const token = useSelector((state) => state.user.token);
  // const name = useSelector((state) => state.user.name);

  const loginHandler = () => {
    dispatch(
      loginRequest({
        email: value.email,
        password: value.password,
      })
    ).then((response) => {
      if (response.payload.data.success) {
        localStorage.setItem("email", value.email);
        // localStorage.setItem("name", name);
        localStorage.setItem("token", response.payload.headers.authorization);

        alert("로그인 되었습니다");
        navigate("/");
        // window.location.reload();
      } else if (response.payload.data.rror) {
        alert("유효하지 않은 아이디/비밀번호 입니다.");
        window.history.go(0); // 이렇게 리로드 해도 괜찮나요..?
      }
    });
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <Container className="mx-auto w-1/3 h-2/3 align-middle  border-solid border-2 ">
        <header className="object-center text-xl p-3 m-3 font-semibold text-center">Sign in</header>
        <InputGroup
          id="email"
          name="email"
          type="email"
          placeholder="아이디(이메일)을 입력하세요"
          label="아이디(이메일)"
          value={value?.email}
          onChange={handleOnChange}
          className={inputStyle}
        />
        <InputGroup
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          label="비밀번호"
          value={value?.password}
          onChange={handleOnChange}
          className={inputStyle}
        />
        <Box className="m-3">
          <Button
            onClick={loginHandler}
            disabled={validAll()}
            className={
              validAll()
                ? "items-center text-center w-full h-12 mt-4 rounded bg-stone-300 transition-colors	"
                : "items-center text-center w-full h-12 mt-4 rounded bg-amber-300"
            }
          >
            로그인
          </Button>
        </Box>
        <div className="text-center text-xs text-stone-500 p-3 ">
          <Link to="/">홈으로</Link>
        </div>
      </Container>
    </div>
  );
};

export default LoginForm;
