import React from "react";
import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginRequest, setLogin } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { emailExp, passwordExp } from "../../utils/regex/exp";

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
  return (
    <Container className="flex items-center justify-center h-screen">
      <Container className="items-center float-none ">
        <h1 className="text-4xl font-bold text-center pb-5">kakao</h1>
        <Container className="w-128 border border-gray-200 rounded-lg p-6">
          <Container pt-10>
            <Container className="mb-4">
              <InputGroup
                className="border-b border-gray-200 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none"
                id="email"
                type="email"
                //placeholder="이메일을 입력해주세요"
                //label="이메일"
                name="email"
                value={value.email}
                onChange={handleOnChange}
                placeholder="카카오메일 아이디, 이메일, 전화번호"
              />
            </Container>
            <Container className="mb-6">
              <InputGroup
                className="border-b border-gray-200 w-full py-2 px-1 text-gray-700 leading-tight focus:outline-none"
                id="password"
                type="password"
                name="password"
                placeholder="비밀번호"
                //label="비밀번호"
                value={value.password}
                onChange={handleOnChange}
              />
            </Container>
            <Button
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-1 w-full rounded cursor-pointer transition-colors duration-300"
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
            >
              로그인
            </Button>
          </Container>
          <Container className="flex items-center justify-center mt-6">
            <hr className="flex-grow border-gray-200" />
            <span className="mx-4 text-gray-500 text-xs">또는</span>
            <hr className="flex-grow border-gray-200" />
          </Container>
          <Container className="flex items-center justify-center mt-6">
            <Button
              className="bg-gray-500 hover:bg-yellow-600 text-white font-bold py-2 px-1 w-full rounded cursor-pointer transition-colors duration-300"
              onClick={(e) => {}}
            >
              QR코드 로그인
            </Button>
          </Container>
          <Container className="flex justify-between mt-6 text-xs">
            <Button
              className="text-gray-600 hover:text-gray-800 float-left"
              onClick={() => {
                gohome("/signup");
              }}
            >
              회원가입
            </Button>
            <Container className="float-right pr-1000">
              <Button
                className="text-gray-600 hover:text-gray-800"
                onClick={(e) => {
                  console.log(e);
                }}
              >
                계정 찾기
              </Button>
              <span className="mx-1">|</span>
              <Button
                className="text-gray-600 hover:text-gray-800"
                onClick={(e) => {}}
              >
                비밀번호 찾기
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default LoginForm;
