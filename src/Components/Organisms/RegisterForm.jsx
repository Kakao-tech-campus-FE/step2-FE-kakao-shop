import Container from "../Atoms/Container";
import Button from "../Atoms/Button";
import InputGroup from "../Molecules/InputGroup";
import { register, checkuser } from "../../Servicies/user";
import useInput from "../../Hooks/useinput";
import Box from "../Atoms/Box";
import { registerRequest, checkUnique } from "../../Store/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const staticServerUri = process.env.REACT_APP_PATH || "";

  const dispatch = useDispatch();
  // const [isValidPw, setIsValidPw] = useState(false);

  const inputStyle = "text-justify items-center mx-3 mb-3 p-3 border-solid border-2 rounded";

  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const validPw = (password) => {
    const validPwLength = 8 <= password.length && password.length <= 20;
    const validPwStructure = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/;

    if (!password) return;
    if (!validPwLength) {
      return <p className="text-sm text-right m-3 text-red-400">8에서 20자 이내여야 합니다.</p>;
    } else if (!validPwStructure.test(password)) {
      return (
        <p className="text-sm text-right m-3 text-red-400">
          영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다.
        </p>
      );
    }
    //  else {
    //   setIsValidPw(!isValidPw);
    // }
  };

  const validEmail = (email) => {
    const validEmailStructure = /^[\w\.-]+@[\w\.-]+\.\w+$/;

    if (!email) {
      return null;
    }
    if (!validEmailStructure.test(email)) {
      return <p className="text-sm text-right m-3 text-red-400">이메일 형식으로 작성해주세요.</p>;
    }
  };

  const validAll = (props) => {
    if (props.email && props.username && props.password && props.passwordConfirm && isUnique) {
      return true;
    } else {
      return false;
    }
  };

  const [isUnique, setUnique] = useState(false);

  const checkReq = () => {
    dispatch(
      checkUnique({
        email: value.email,
      })
    ).then((res) => {
      if (res.payload?.success) {
        setUnique(!isUnique);
      }
    });
  };

  const navigate = useNavigate();

  const registerHandler = () => {
    dispatch(
      registerRequest({
        username: value.username,
        email: value.email,
        password: value.password,
        passwordConfirm: value.passwordConfirm,
      })
    ).then((response) => {
      if (response.payload?.success) {
        alert("회원가입이 완료되었습니다.");
        navigate("/loginpage");
      } else {
        console.log(response);
        alert(response.payload?.error.message);
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center align-middle gap-5 mt-5">
      <img src={staticServerUri + "/logoKakaoText.png"} width={120}></img>

      <Container className="mx-auto w-2/5 h-2/5 border-[1.5px] p-14 mb-5">
        <InputGroup
          id="username"
          type="text"
          name="username"
          placeholder="이름을 입력하세요"
          label="이름"
          value={value.username}
          onChange={handleOnChange}
          className={inputStyle}
        />
        <InputGroup
          id="email"
          type="email"
          name="email"
          placeholder="이메일을 입력하세요"
          label="이메일"
          value={value.email}
          onChange={(e) => {
            handleOnChange(e);
            checkReq();
          }}
          className={inputStyle}
          option={
            <div className="mr-3">
              {isUnique ? (
                <div className=" w-3 h-3 rounded-full bg-green-300"></div>
              ) : (
                <div className="w-3 h-3 rounded-full bg-stone-300"></div>
              )}
            </div>
          }
        />
        {validEmail(value.email)}
        <InputGroup
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호를 입력하세요"
          label="비밀번호"
          value={value.password}
          onChange={(e) => {
            handleOnChange(e);
          }}
          className={inputStyle}
        />
        {validPw(value.password)}
        <InputGroup
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호를 다시 입력하세요"
          label="비밀번호 확인"
          value={value.passwordConfirm}
          onChange={handleOnChange}
          className={inputStyle}
        />
        <>
          {value.password === value.passwordConfirm ? null : (
            <p className="text-sm text-right m-3 text-red-400">비밀번호가 일치하지 않습니다</p>
          )}
        </>
        {validAll(value)}
        <Box className="m-3">
          <Button
            onClick={registerHandler}
            disabled={!validAll(value)}
            className={
              !validAll(value)
                ? "items-center text-center w-full h-12 mt-4 rounded bg-stone-100 text-stone-500 transition-colors	"
                : "items-center text-center w-full h-12 mt-4 rounded bg-amber-300"
            }
          >
            회원가입
          </Button>
        </Box>
        <div className="text-center text-xs text-stone-500 pt-3 ">
          <Link to="/">홈으로</Link>
        </div>
      </Container>
    </div>
  );
};

export default RegisterForm;
