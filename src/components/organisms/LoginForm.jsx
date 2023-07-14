import InputGroup from "../molecules/InputGroup";
import SubmitButton from "../atoms/SubmitButton";
import Form from "../atoms/Form";
import useInput from "../../hooks/useInput";
import useValidation from "../../hooks/useValidation";
import { login } from "../../services/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    const data = {
      email: value.email,
      password: value.password,
    };

    login(data)
      .then((response) => {
        if (response.status === 200) {
          navigate("/");
          // dispatch({ type: "changeState" });
          localStorage.setItem("userInfo", JSON.stringify(data));
          alert("로그인 성공!");
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
        <SubmitButton
          type="submit"
          styles={{
            width: "32rem",
            padding: "0.6rem",
            backgroundColor: "yellow",
            fontWeight: "bold",
            borderRadius: "6px",
          }}
          onClick={handleSubmit}
        >
          로그인
        </SubmitButton>
      </Form>
    </>
  );
};

export default LoginForm;
