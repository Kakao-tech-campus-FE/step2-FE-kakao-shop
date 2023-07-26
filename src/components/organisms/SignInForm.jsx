import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import ErrorMessage from "../atoms/ErrorMessage";
import { signinRequest } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { EMAIL_REG, PASSWORD_REG } from "../../utils/regExp";
import { FORM_MAIL, FORM_PASSWORD } from "../../utils/formMessage";

const Container = styled.form`
  width: 400px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;
  padding: 0 8px;

  & > Button {
    margin-top: 24px;
  }
`;

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    const action = await dispatch(signinRequest({ email, password }));
    if (action.payload.error?.status === 401) {
      setError("password", {
        message: "이메일(아이디) 혹은 비밀번호가 일치하지 않습니다.",
      });
    } else {
      navigate("/");
    }
  };

  return (
    <Container>
      <Title>로그인</Title>
      <InputGroup
        id="email"
        title="이메일(아이디)"
        type="email"
        placeholder="이메일"
        register={register("email", {
          required: "이메일(아이디)을(를) 입력해주세요.",
          pattern: {
            value: EMAIL_REG,
            message: FORM_MAIL,
          },
        })}
      />
      {errors?.email?.message ? (
        <ErrorMessage>{errors.email.message}</ErrorMessage>
      ) : null}
      <InputGroup
        id="password"
        title="비밀번호"
        type="password"
        placeholder="비밀번호"
        register={register("password", {
          required: "비밀번호를 입력해주세요.(영문자/숫자/특수문자)",
          pattern: {
            value: PASSWORD_REG,
            message: FORM_PASSWORD,
          },
        })}
      />
      {errors?.password?.message ? (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      ) : null}
      <Button
        onClick={handleSubmit(onSubmit)}
        bgColor="#ffe342"
        textColor="black"
      >
        로그인
      </Button>
    </Container>
  );
};

export default SignInForm;
