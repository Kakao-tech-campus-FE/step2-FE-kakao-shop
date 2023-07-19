import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import Container from "../atoms/Container";
import useInput from "../../hooks/useInput";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const { value, handleOnChange } = useInput({
      email: "",
      password: "",
    });

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
          localStorage.setItem("userInfo", JSON.stringify(data));
          alert("로그인 되었습니다.");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Container>
        <InputGroup
          id="email"
          name="email"
          type="email"
          value={value.email}
          placeholder="이메일"
          onChange={(e) => {
            handleOnChange(e);
        }}
        />
        <InputGroup
          id="password"
          name="password"
          type="password"
          value={value.password}
          placeholder="비밀번호"
          onChange={(e) => {
            handleOnChange(e);
        }}
        />
        <Button
          type="submit"
          styles={{
            width: "32rem",
            backgroundColor: "yellow",
            fontWeight: "bold",
            borderRadius: "6px",
            padding: "0.6rem",
          }}
          onClick={handleSubmit}
        >
          로그인
        </Button>
      </Container>
    </>
  );
};
export default LoginForm;