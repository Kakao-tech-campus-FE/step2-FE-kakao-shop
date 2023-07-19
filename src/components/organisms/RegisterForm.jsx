import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import Title from "../atoms/Title";
import { useDispatch, useSelector } from "react-redux";
import { registerRequest } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { emailExp, nameExp, passwordExp } from "../../utils/regex/exp";

const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const navigator = useNavigate();
  function gohome(url) {
    navigator(url);
  }
  const dispatch = useDispatch();
  const error = useSelector((state) => state.user.error);
  return (
    <Container className="doc-main m-0 p-0 w-full h-full bg-white">
      <div className="doc-title block pt-1/3 mt-10 mb-10 ">
        <h1 className="tit_service block m-0 p-0 font-bold">
          <span className="logo_kakao block w-88 h-27 mx-auto my-0 bg-white bg-auto text-center ">
            <span className="relative block text-center -z-1 w-full h-full text-2xl">
              kakao
            </span>
          </span>
        </h1>
      </div>
      <Title>{error}</Title>
      <InputGroup
        id="username"
        type="text"
        placeholder="사용자 이름을 입력해주세요"
        className="border-b border-gray-200 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none"
        //label="이름"
        name="username"
        value={value.username}
        onChange={handleOnChange}
      />
      <InputGroup
        id="email"
        type="email"
        placeholder="이메일을 입력해주세요"
        className="border-b border-gray-200 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none"
        //label="이메일"
        name="email"
        value={value.email}
        onChange={handleOnChange}
      />
      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="********"
        className="border-b border-gray-200 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none"
        //label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="********"
        className="border-b border-gray-200 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none"
        //label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      <Button
        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-1 w-full rounded cursor-pointer transition-colors duration-300"
        onClick={() => {
          new Promise((resolve, reject) => {
            //유효성 검사 진행
            if (!nameExp(value.username))
              reject("이름은 비어있을 수 없습니다.");
            else if (!emailExp(value.email))
              reject("이메일 형식이 올바르지 않습니다.");
            else if (value.password !== value.passwordConfirm)
              reject("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            else if (!passwordExp(value.password))
              reject("비밀번호는 8~20글자로 특수문자 하나를 포함합니다.");
            resolve(1);
          })
            .then(() => {
              //api 요청
              dispatch(
                registerRequest({
                  email: value.email,
                  username: value.username,
                  passwordConfirm: value.passwordConfirm,
                  password: value.password,
                })
              ).then((res) => {
                if (res.payload.success) gohome("/"); //성공 시 홈페이지 이동
              });
            })
            .catch((err) => {
              alert(err);
            });
        }}
      >
        Sign Up
      </Button>
    </Container>
  );
};
export default RegisterForm;
