import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, setLogin } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { emailExp, passwordExp } from "../../exp";

const LoginForm = () => {
  const navigator = useNavigate();
  function gohome(url) {
    navigator(url);
  }
  const dispatch = useDispatch();
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });
  const email = useSelector((state) => state.email);
  const error = useSelector((state) => state.error);

  return (
    <Container className="flex h-screen w-full items-center justify-center bg-white-900 bg-cover bg-no-repeat">
      <Container className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <Container className="mb-8 flex flex-col items-center">
          <Title className="mb-2 text-2xl">kakao</Title>
          <Title>{email}</Title>
          <Title>{error}</Title>
        </Container>
        <Container className="text-black">
          <Container>
            <Container className="mb-4 text-lg">
              <InputGroup
                className="rounded-3xl border-none bg-white-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-white-md"
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                label="이메일"
                name="email"
                value={value.email}
                onChange={handleOnChange}
              />
            </Container>

            <Container className="mb-4 text-lg">
              <InputGroup
                //className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                id="password"
                type="password"
                name="password"
                placeholder="********"
                label="비밀번호"
                value={value.password}
                onChange={handleOnChange}
              />
            </Container>
            <Container className="mt-8 flex justify-center text-lg text-black">
              <Button
                onClick={() => {
                  new Promise((resolve, reject) => {
                    //프론트 엔드에서 진행하는 유효성 검사 프로미스
                    if (!emailExp(value.email))
                      reject("이메일 형식이 올바르지 않습니다.");
                    else if (!passwordExp(value.password))
                      reject("비밀번호 형식이 올바르지 않습니다.");
                    resolve(1);
                  })
                    .then(() => {
                      //유효성 검사 완료 후 api 요청
                      dispatch(
                        loginRequest({
                          email: value.email,
                          password: value.password,
                        })
                      ).then((res) => {
                        if (res.payload.success) {
                          //로그인 성공시
                          dispatch(setLogin(true)); //로그인이 됐다면 바로 (로그아웃)으로 버튼이 뜰 수 있게 상태 설정
                          gohome("/"); //성공 시 홈페이지 이동
                        }
                      });
                    })
                    .catch((error) => alert(error));
                }}
                className="rounded-3xl bg-yellow-400 bg-yellow-50 px-10 py-2 text-white shadow-xl backdrop-yellow-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Login
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};
export default LoginForm;
