// router
import { useNavigate } from "react-router-dom";
// axios
import { logInReq } from "../../apis/api.js";
// redux
import { useDispatch } from "react-redux";
import { setEmail } from "../../store/slices/userSlice.js";

// hook
import useInput from "../../hooks/useInput.js";
// components
import Container from "../atoms/Container.js";
import Button from "../atoms/Button.js";
import LabeledInput from "../molecules/LabeledInput.js";

export default function LogInForm() {
  const { inputValue, handleChange } = useInput({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container>
      <LabeledInput
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        label="이메일"
        placeholder="이메일"
        value={inputValue.email}
      />
      <LabeledInput
        type="password"
        id="password"
        name="password"
        onChange={handleChange}
        label="비밀번호"
        placeholder="비밀번호"
        value={inputValue.password}
      />
      <Button
        onClick={() => {
          if (!Object.values(inputValue).every((val) => val !== "")) {
            alert("비어 있을 수 없습니다.");
            return;
          }
          if (
            !RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/).test(
              inputValue.email
            )
          ) {
            alert("이메일 형식으로 작성해주세요.");
            return;
          }
          if (!RegExp(/^.{8,20}$/).test(inputValue.password)) {
            alert("비밀번호는 8에서 20자 이내여야 합니다.");
            return;
          }
          if (
            !RegExp(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?])[^ ]+$/
            ).test(inputValue.password)
          ) {
            alert(
              "비밀번호는 영문, 숫자, 특수문자가 포함되어야 하고 공백이 포함될 수 없습니다."
            );
            return;
          }
          console.log(inputValue.password);
          logInReq({
            email: inputValue.email,
            password: inputValue.password,
          })
            .then((res) => {
              console.log(res.data);
              dispatch(setEmail({ email: inputValue.email }));
              navigate("/");
            })
            .catch((err) => {
              alert(err.response.data.error.message);
            });
        }}
      >
        로그인
      </Button>
      <Button
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </Button>
    </Container>
  );
}
