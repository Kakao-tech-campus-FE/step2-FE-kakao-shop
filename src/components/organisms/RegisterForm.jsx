import InputGroup from "../molecules/InputGroup";
import SubmitButton from "../atoms/SubmitButton";
import Form from "../atoms/Form";
import { register } from "../../services/user";
import useInput from "../../hooks/useInput";
import useValidation from "../../hooks/useValidation";
import { useNavigate } from "react-router-dom";
import routes from "../../routes.js";

const RegisterForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
    passwordConfirm: "",
    username: "",
  });

  const { msg: emailMsg, handleSetMsg: handleSetEmailMsg } = useValidation("");
  const { msg: pwMsg, handleSetMsg: handleSetPwMsg } = useValidation("");
  const { msg: confirmPwMsg, handleConfirmPwMsg } = useValidation("");

  const handlePwConfirm = (e) => {
    handleConfirmPwMsg(value.password, e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    register({
      email: value.email,
      password: value.password,
      username: value.username,
    })
      .then((response) => {
        if (response.status === 200) {
          navigate(routes.home);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Form>
        <InputGroup
          id="email"
          name="email"
          type="email"
          value={value.email}
          placeholder="이메일"
          onChange={(e) => {
            handleOnChange(e);
            handleSetEmailMsg(e);
          }}
          errorMsg={emailMsg}
        >
          이메일(아이디)
        </InputGroup>
        <InputGroup
          id="username"
          name="username"
          type="text"
          value={value.username}
          placeholder="이름"
          onChange={handleOnChange}
        >
          이름
        </InputGroup>
        <InputGroup
          id="password"
          name="password"
          type="password"
          value={value.password}
          placeholder="비밀번호"
          onChange={(e) => {
            handleOnChange(e);
            handleSetPwMsg(e);
          }}
          helperMsg={pwMsg}
        >
          비밀번호
        </InputGroup>
        <InputGroup
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          value={value.passwordConfirm}
          placeholder="비밀번호 확인"
          onChange={(e) => {
            handleOnChange(e);
            handlePwConfirm(e);
          }}
          errorMsg={confirmPwMsg}
        >
          비밀번호 확인
        </InputGroup>
        <SubmitButton type="submit" onClick={handleSubmit}>
          회원가입
        </SubmitButton>
      </Form>
    </>
  );
};

export default RegisterForm;
