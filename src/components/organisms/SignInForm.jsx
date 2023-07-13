import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import ErrorMessage from "../atoms/ErrorMessage";
import { signinRequest } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

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

const EMAIL_REG = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const PASSWORD_REG = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

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
    try {
      dispatch(signinRequest({ email, password }));
      navigate("/");
    } catch (error) {
      if (error.response.status === 401) {
        setError("password", {
          message: "이메일(아이디) 혹은 비밀번호가 일치하지 않습니다.",
        });
      }
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
          required: "이메일(아이디)을 입력해주세요.",
          pattern: {
            value: EMAIL_REG,
            message: "이메일 형식으로 작성해주세요.",
          },
        })}
      />
      {errors?.email?.message ? (
        <ErrorMessage>{errors.email.message}</ErrorMessage>
      ) : null}
      <InputGroup
        id="password"
        title="비밀번호"
        name="password"
        type="password"
        placeholder="비밀번호"
        register={register("password", {
          required: "비밀번호를 입력해주세요.(영문자/숫자/특수문자)",
          pattern: {
            value: PASSWORD_REG,
            message:
              "공백 없이 8자 ~ 20자로 영문, 숫자, 특수문자를 포함해야 합니다.",
          },
        })}
      />
      {errors?.password?.message ? (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      ) : null}
      <Button onClick={handleSubmit(onSubmit)}>로그인</Button>
    </Container>
  );
};

export default SignInForm;
