import Container from "../atoms/Container";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import useInput from "../../hooks/useinput";
import Title from "../atoms/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register, duplicate } from "../../services/users";

// RegisterForm
// |_value
// | |_username
// | |_email
// | |_password
// | |_passwordConfirm
// |_errors
//    |_duplicate
//    |_email
//    |_password
//    |_passwordConfirm

// |_handleDuplicate  * email duplicate check
// | |_response
// |_handleRegister   * register error check, redirect
// |_validateEmail
// | |_emailRange
// |_valdiatePassword
// | |_passwordRange
// |_validateConfirm
// |_handleOnSubmit   * check meet all criteria and run handleRegiser

// return
// |_Container
//   |_InputGroup (사용자 이름 입력)
//   |_InputGroup (이메일 입력)
//   |_Button  (중복 체크 버튼)
//   |_div(중복체크 에러)  * 에러 시에만
//   |_InputGroup (비밀번호)
//   |_div(비밀번호 에러)  * 에러 시에만
//   |_InputGroup (비밀번호 확인)
//   |_div(비밀번호 확인 에러) * 에러 시에만
//   |_Button  (회원가입 버튼)

const RegisterForm = () => {
  const navigate = useNavigate();
  const [errors, setError] = useState({});
  const { value, handleOnChange } = useInput({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  //Duplicate check handle

  const emailresponse = new Array(
    "이 이메일을 사용할 수 있습니다",
    "동일한 이메일이 존재하거나 올바르지 않은 입력입니다."
  );
  const regierror = "회원가입에 실패했습니다.";
  const emailerror = "유효한 이메일 형식이 아닙니다.";
  const passwderror =
    "비밀번호는 영문, 숫자, 특수문자를 포함하고, 공백이 없으며 8~20자여야 합니다.";
  const passwdconfirmerror = "입력한 비밀번호와 다릅니다.";

  const handleDuplicate = async () => {
    const email = value.email;
    try {
      const response = await duplicate(email);

      if (response.request.status === 200) {
        setError((prevState) => ({
          ...prevState,
          duplicate: emailresponse[0], //이 이메일을 사용할 수 있습니다
        }));
      }
    } catch (error) {
      setError((prevState) => ({
        ...prevState,
        duplicate: emailresponse[1], //동일한 이메일이 존재하거나 올바르지 않은 입력입니다
      }));
    }
  };

  //Register request handle
  const handleRegister = async (data) => {
    try {
      const { email, password, username } = data;
      const response = await register({ email, password, username });
      navigate("/login");
    } catch (errors) {
      setError(regierror);
    }
  };

  //Email validation check
  const validateEmail = () => {
    const emailRange = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/;
    if (!emailRange.test(value.email)) {
      setError((prevState) => ({
        ...prevState,
        email: emailerror,
      }));
      return false;
    } else {
      setError((prevState) => ({
        ...prevState,
        email: undefined,
      }));
    }
    return true;
  };

  //Password validation check
  const validatePassword = () => {
    const passwordRange =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/;
    if (!passwordRange.test(value.password)) {
      setError((prevState) => ({
        ...prevState,
        password: passwderror,
      }));
      return false;
    } else {
      setError((prevState) => ({
        ...prevState,
        password: undefined,
      }));
    }
    return true;
  };

  // check Password = Passwordconfirm
  const validateConfirm = () => {
    if (value.password !== value.passwordConfirm) {
      setError((prevState) => ({
        ...prevState,
        passwordConfirm: passwdconfirmerror,
      }));
      return false;
    } else {
      setError((prevState) => ({
        ...prevState,
        passwordConfirm: undefined,
      }));
    }
    return true;
  };

  // meet all requirements then send register request
  const handleOnSubmit = () => {
    const isValidEmail = validateEmail();
    const isValidPassword = validatePassword();
    const isValidConfirm = validateConfirm();

    if (isValidEmail && isValidPassword && isValidConfirm) {
      handleRegister({
        email: value.email,
        password: value.password,
        username: value.username,
        passwordConfirm: value.passwordConfirm,
      });
    }
  };

  return (
    <Container className="w-1/2 h-full block align-middle border rounded border-gray-light p-16">
      <InputGroup
        id="username"
        type="text"
        name="username"
        placeholder="사용자 이름을 입력해주세요."
        label="이름"
        value={value.username}
        onChange={handleOnChange}
      />

      <InputGroup
        id="email"
        type="email"
        name="email"
        placeholder="이메일(아이디)를 입력해주세요."
        label="이메일"
        value={value.email}
        onChange={handleOnChange}
      />
      <Button
        className="w-1/5 h-9 rounded bg-yellow-500 mt-3"
        onClick={handleDuplicate}
      >
        중복체크
      </Button>
      {errors.duplicate && (
        <div className="text-red-500">{errors.duplicate}</div>
      )}
      {errors.email && <div className="text-red-500">{errors.email}</div>}

      <InputGroup
        id="password"
        type="password"
        name="password"
        placeholder="**********."
        label="비밀번호"
        value={value.password}
        onChange={handleOnChange}
      />
      {errors.password && <div className="text-red-500">{errors.password}</div>}

      <InputGroup
        id="passwordConfirm"
        type="password"
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        label="비밀번호 확인"
        value={value.passwordConfirm}
        onChange={handleOnChange}
      />
      {errors.passwordConfirm && (
        <div className="text-red-500">{errors.passwordConfirm}</div>
      )}
      <Button
        className="w-full h-9 rounded bg-yellow-500 mt-3"
        onClick={handleOnSubmit}
      >
        회원가입
      </Button>
    </Container>
  );
};

export default RegisterForm;
