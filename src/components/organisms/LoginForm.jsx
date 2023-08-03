import InputGroup from "../molecules/InputGroup";
import SubmitButton from "../atoms/SubmitButton";
import Form from "../atoms/Form";
import useInput from "../../hooks/useInput";
import useValidation from "../../hooks/useValidation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../store/slices/userSlice";

const LoginForm = () => {
  const { value, handleOnChange } = useInput({
    email: "",
    password: "",
  });

  const { msg: emailMsg, handleSetMsg: handleSetEmailMsg } = useValidation("");
  const { msg: pwMsg, handleSetMsg: handleSetPwMsg } = useValidation("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(
      loginRequest({
        email: value.email,
        password: value.password,
      })
    )
      .then((action) => {
        const response = action.payload;
        if (response.email && response.token) {
          navigate("/");
          alert("로그인 성공!");
        }
      })
      .catch((error) => {
        console.error("로그인 실패:", error);
        alert("로그인에 실패했습니다.");
      });
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
        />
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
        />
        <SubmitButton type="submit" onClick={handleSubmit}>
          로그인
        </SubmitButton>
      </Form>
    </>
  );
};

export default LoginForm;
