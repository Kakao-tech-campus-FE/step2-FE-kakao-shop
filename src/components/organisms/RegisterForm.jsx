import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useInput";
import { useState } from "react";
import { emailValidCheck, pwValidCheck } from "../../utils/validationCheck";
import { registerRequest } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  // RegisterForm의 상태 관리
  // 상태 관리는 높은 단계에서 하는 것이 좋다 (atoms level X -> molecule organism level O)

  // useInput 커스텀 훅 사용 이전 코드
  // const [form, setForm] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   passwordConfirm: "",
  // });

  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const dispatch = useDispatch();

  //LoginForm에서의 validation과 코드 중복, 리팩토링 필요
  const [validation, setValidation] = useState({
    username: true,
    email: true,
    password: true,
    pwConfirm: true,
  });
  const handleRequest = () => {
    const existUsername = Boolean(value.username);
    const isEmailValid = emailValidCheck(value.email);
    const isPwValid = pwValidCheck(value.password);
    const isPwCheckValid = value.password === value.passwordConfirm;

    setValidation({
      username: existUsername,
      email: isEmailValid,
      password: isPwValid,
      pwConfirm: isPwCheckValid,
    });

    if (isEmailValid && isPwValid && isPwCheckValid) {
      // 유효성 검사 통과, 로그인 요청
      dispatch(
        registerRequest({
          email: value.email,
          password: value.password,
          username: value.username,
        })
      );
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleRequest();
    }
  };

  const [isFocus, setIsFocus] = useState([false, false, false, false]);
  const getInputGroupClass = (index) => {
    return isFocus[index]
      ? "border-b-2 border-neutral-500 m-5 mb-2"
      : "border-b-2 border-neutral-300 m-5 mb-2";
  };
  const handleFocus = (index, value) => {
    setIsFocus((prevIsFocus) => {
      const newIsFocus = [...prevIsFocus];
      newIsFocus[index] = value;
      return newIsFocus;
    });
  };

  return (
    <Container
      className="border-neutral-300 border px-16 py-14 w-[660px] min-w-fit h-full my-10 mx-auto"
      onKeyDown={handleKeyDown}
    >
      <div className="text-center font-normal text-3xl mx-auto my-10">
        가입을 시작합니다!
      </div>
      <div className="text-center font-normal text-lg text-gray-400 mx-auto my-10">
        <span>카카오계정 하나로</span>
        <br />
        <span>다양한 서비스를 편리하게 이용해 보세요.</span>
      </div>
      <InputGroup
        id={"username"}
        type={"text"}
        name={"username"}
        placeholder={"사용자 이름"}
        //label={"이름"}
        // 커스텀 훅 사용 이전 코드
        // value={form.username}
        // onChange={(e) => {
        //   setForm({ ...form, [e.target.name]: e.target.value });
        // }} // input 값의 변경시 => onChange => setForm 으로 상태 관리
        // // 아래의 다른 InputGroup들 마다 username:, password: 각각 다른 속성을 부여해야 하므로 귀찮다
        // // 그래서 input에 name 속성을 주고 이를 e.target.name으로 받아와서 이용한다
        value={value.username}
        onChange={handleOnChange}
        ///
        className={getInputGroupClass(0)}
        inputClass={"focus:outline-0 focus:bt-black w-full m-3"}
        onFocus={() => {
          handleFocus(0, true);
        }}
        onBlur={() => {
          handleFocus(0, false);
        }}
      />
      <div className="m-2 text-red-500 pl-3">
        {validation.username ? "" : "사용자 이름을 입력해 주세요."}
      </div>
      <InputGroup
        id={"email"}
        type={"email"}
        name={"email"}
        placeholder={"이메일(아이디)"}
        //label={"이메일"}
        value={value.email}
        onChange={handleOnChange}
        ///
        className={getInputGroupClass(1)}
        inputClass={"focus:outline-0 focus:bt-black w-full m-3"}
        onFocus={() => {
          handleFocus(1, true);
        }}
        onBlur={() => {
          handleFocus(1, false);
        }}
      />
      <div className="m-2 text-red-500 pl-3">
        {validation.email ? "" : "잘못된 이메일 형식입니다."}
      </div>
      <InputGroup
        id={"password"}
        type={"password"}
        name={"password"}
        placeholder={"비밀번호"}
        //label={"비밀번호"}
        value={value.password}
        onChange={handleOnChange}
        ///
        className={getInputGroupClass(2)}
        inputClass={"focus:outline-0 focus:bt-black w-full m-3"}
        onFocus={() => {
          handleFocus(2, true);
        }}
        onBlur={() => {
          handleFocus(2, false);
        }}
      />
      <div className="m-2 text-red-500 pl-3">
        {validation.password
          ? ""
          : "영문, 숫자, 특수문자가 포함되며, 8에서 20자 이내여야 합니다."}
      </div>
      <InputGroup
        id={"passwordConfirm"}
        type={"password"}
        name={"passwordConfirm"}
        placeholder={"비밀번호 확인"}
        //label={"비밀번호 확인"}
        value={value.passwordConfirm}
        onChange={handleOnChange}
        ///
        className={getInputGroupClass(3)}
        inputClass={"focus:outline-0 focus:bt-black w-full m-3"}
        onFocus={() => {
          handleFocus(3, true);
        }}
        onBlur={() => {
          handleFocus(3, false);
        }}
      />
      <div className="m-2 text-red-500 pl-3">
        {validation.pwConfirm ? "" : "비밀번호가 일치하지 않습니다."}
      </div>
      <Button
        className={
          "block w-full h-12 mt-10 rounded bg-yellow-300 hover:bg-yellow-400"
        }
        onClick={
          handleRequest
          // registerRequest 사용 이전 코드
          //   () => {
          //   // API 회원가입 요청
          //   // register 함수에 필요없는 passwordConfirm은 전달하지 않게 하기 위해 객체로 전달
          //   // 깔끔하진 않겠지만 value를 통으로 전달해도 기능은 한다. register에서 처리하기 떄문
          //   register({
          //     email: value.email,
          //     password: value.password,
          //     username: value.username,
          //   }
          //   );
          // }
        }
      >
        회원가입
      </Button>
    </Container>
  );
};
export default RegisterForm;
