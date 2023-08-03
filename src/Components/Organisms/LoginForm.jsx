import Container from "../Atoms/Container";
import Button from "../Atoms/Button";
import InputGroup from "../Molecules/InputGroup";
import useInput from "../../Hooks/useinput";
import Box from "../Atoms/Box";
import { loginRequest } from "../../Store/Slices/userSlice";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const staticServerUri = process.env.REACT_APP_PATH || "";

  const dispatch = useDispatch();

  const inputStyle = "text-justify items-center pb-2 text-lg border-b-2 border-stone-200";

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

  const loginHandler = () => {
    dispatch(
      loginRequest({
        email: value.email,
        password: value.password,
      })
    ).then((response) => {
      console.log(response);
      if (response.payload.data.success) {
        localStorage.setItem("email", value.email);
        localStorage.setItem("token", response.payload.headers.authorization);

        alert("로그인 되었습니다");
        navigate(`${staticServerUri}/`);
        // window.location.reload();
      } else if (response.payload.data.error) {
        alert("유효하지 않은 아이디/비밀번호 입니다.");
        navigate(0);
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center align-middle gap-8">
      <img src={staticServerUri + "./logoKakaoText.png"} width={120}></img>
      <Container className="mx-auto w-4/12 h-4/12 border-[1.5px] p-16">
        <InputGroup
          id="email"
          name="email"
          type="email"
          placeholder="카카오메일 아이디, 이메일, 전화번호"
          value={value?.email}
          onChange={handleOnChange}
          className={inputStyle}
        />
        <InputGroup
          id="password"
          name="password"
          type="password"
          placeholder="비밀번호"
          value={value?.password}
          onChange={handleOnChange}
          className={inputStyle}
        />
        <div className="flex items-center gap-3 mt-5">
          <div className="border-[2px] border-stone-400 rounded-full w-5 h-5"></div>
          <div className="text-xs">간편로그인 정보 저장</div>
        </div>
        <Box className="mt-3">
          <Button
            onClick={loginHandler}
            disabled={validAll()}
            className={
              validAll()
                ? "items-center text-center w-full h-12 mt-5 rounded bg-stone-100 transition-colors	"
                : "items-center text-center w-full h-12 mt-5 rounded bg-amber-300"
            }
          >
            로그인
          </Button>
          <div className="text-xs text-stone-500 text-center p-4">또는</div>
          <Button disabled={true} className="items-center text-center w-full h-12 rounded bg-stone-100">
            QR코드 로그인
          </Button>
        </Box>
        <div className="flex justify-between text-center text-xs pt-6 font-semibold">
          <Link to={staticServerUri + "/registerpage"}>회원가입</Link>
          <div>
            <span className="border-r border-stone-300 pr-2 mr-2">계정 찾기</span>
            <span>비밀번호 찾기</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoginForm;
