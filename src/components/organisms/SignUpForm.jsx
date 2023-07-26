import { styled } from "styled-components";
import { useForm } from "react-hook-form";
import { commonInstance } from "../../services/apis";
import { useState } from "react";
import InputGroup from "../molecules/InputGroup";
import Button from "../atoms/Button";
import ErrorMessage from "../atoms/ErrorMessage";
import ValidMessage from "../atoms/ValidMessage";
import Title from "../atoms/Title";
import { useNavigate } from "react-router-dom";
import { EMAIL_REG, PASSWORD_REG } from "../../utils/regExp";
import {
  FORM_REQUIRED,
  FORM_MAIL,
  FORM_DUPLICATE_MAIL,
  FORM_PASSWORD,
  FORM_PASSWORD_CONFIRM,
} from "../../utils/formMessage";

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

const Row = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 6px;
  width: 100%;

  & > Button {
    width: 40%;
  }
`;

const SignUpForm = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    trigger,
    setError,
    clearErrors,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // 이메일
  const handleEmailChange = () => {
    const email = watch("email");
    setIsEmailValid(false);

    if (!email) {
      return setError("email", { message: FORM_REQUIRED });
    }

    if (!EMAIL_REG.test(email)) {
      setError("email", {
        message: FORM_MAIL,
      });
    } else {
      clearErrors("email");
    }
  };
  const checkDupEmail = async (email) => {
    trigger("email");
    if (!email) {
      return setError("email", { message: FORM_REQUIRED });
    }
    try {
      const response = await commonInstance.post("/check", { email });
      if (response.data.success) {
        setIsEmailValid(true);
      }
    } catch (error) {
      setIsEmailValid(false);
      const errorMsg = error.response.data.error.message;
      if (errorMsg.slice(-5) === "email") {
        setError("email", {
          message: errorMsg.slice(0, -6).concat("."),
        });
      } else {
        setError("email", {
          message: FORM_DUPLICATE_MAIL,
        });
      }
    }
  };

  // 이름
  const handleUsernameChange = () => {
    const username = watch("username");

    if (!username) {
      return setError("username", { message: FORM_REQUIRED });
    } else {
      clearErrors("username");
    }
  };

  // 비밀번호
  const handlePasswordChange = () => {
    const password = watch("password");

    if (!password) {
      return setError("password", { message: FORM_REQUIRED });
    }

    if (!PASSWORD_REG.test(password)) {
      setError("password", {
        message: FORM_PASSWORD,
      });
    } else {
      clearErrors("password");
    }

    if (watch("password") !== watch("passwordConfirm")) {
      setError("passwordConfirm", {
        message: FORM_PASSWORD_CONFIRM,
      });
    } else {
      clearErrors("passwordConfirm");
    }
  };

  // 비밀번호 확인
  const handlePasswordConfirmChange = () => {
    if (watch("password") !== watch("passwordConfirm")) {
      setError("passwordConfirm", {
        message: FORM_PASSWORD_CONFIRM,
      });
    } else {
      clearErrors("passwordConfirm");
    }
  };

  // 가입하기
  const onSumbit = async ({ email, username, password }) => {
    try {
      await commonInstance.post("/join", {
        email,
        username,
        password,
      });
      navigate("/");
    } catch (error) {
      // 에러 발생 상황 뭐가 있을까 생각해보기
      const errorMsg = error.response.data.error.message;
      console.log(errorMsg);
    }
  };

  return (
    <Container>
      <Title>가입을 시작합니다!</Title>
      <Row>
        <InputGroup
          id="email"
          title="이메일(아이디)"
          type="email"
          placeholder="이메일"
          register={register("email", {
            required: FORM_REQUIRED,
            pattern: {
              value: EMAIL_REG,
              message: FORM_MAIL,
            },
            onChange: handleEmailChange,
          })}
        />
        <Button
          onClick={() => checkDupEmail(watch("email"))}
          bgColor="#ffe342"
          textColor="black"
        >
          중복 확인
        </Button>
      </Row>
      {errors?.email?.message ? (
        <ErrorMessage>{errors.email.message}</ErrorMessage>
      ) : !isEmailValid ? null : (
        <ValidMessage>사용 가능한 이메일(아이디)입니다.</ValidMessage>
      )}

      <InputGroup
        id="username"
        title="이름"
        type="text"
        placeholder="이름"
        register={register("username", {
          required: FORM_REQUIRED,
          onChange: handleUsernameChange,
        })}
      />
      {errors?.username?.message ? (
        <ErrorMessage>{errors.username.message}</ErrorMessage>
      ) : null}

      <InputGroup
        id="password"
        title="비밀번호"
        type="password"
        placeholder="비밀번호"
        register={register("password", {
          required: FORM_REQUIRED,
          pattern: {
            value: PASSWORD_REG,
            message: FORM_PASSWORD,
          },
          onChange: handlePasswordChange,
        })}
      />
      {errors?.password?.message ? (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      ) : null}

      <InputGroup
        id="passwordConfirm"
        title="비밀번호 확인"
        type="password"
        placeholder="비밀번호 확인"
        register={register("passwordConfirm", {
          required: FORM_REQUIRED,
          validate: (v) => v === watch("password") || FORM_PASSWORD_CONFIRM,
          onChange: handlePasswordConfirmChange,
        })}
      />
      {errors?.passwordConfirm?.message ? (
        <ErrorMessage>{errors.passwordConfirm.message}</ErrorMessage>
      ) : null}

      <Button
        disabled={!isEmailValid}
        onClick={handleSubmit(onSumbit)}
        bgColor="#ffe342"
        textColor="black"
      >
        가입하기
      </Button>
    </Container>
  );
};

export default SignUpForm;
