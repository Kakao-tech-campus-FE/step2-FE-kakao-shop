import { useDispatch } from "react-redux";
import { useState } from "react";
import Container from "../atoms/Container";
import Button from "../atoms/Button";
import Title from "../atoms/Title";
import Box from "../atoms/Box";
import InputGroup from "../molecules/InputGroup";
import useInput from "../../hooks/useInput";
import instance from "../../api";
import { login } from "../../store/slices/authSlice";
import AlertBox from "../molecules/AlertBox";
import LinkButton from "../atoms/LinkButton";
import staticServerUri from "../../utils/krampoline";

/** 로그인 폼
 *
 * @return {JSX.Element}
 */
const LoginForm = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();
  const { values, handleChange } = useInput({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;

    if (!values.email) {
      setErrorMessage("이메일을 입력해주세요.");
      return;
    }
    if (!emailRegex.test(values.email)) {
      setErrorMessage("이메일 형식으로 입력해주세요.");
      return;
    }
    if (!values.password) {
      setErrorMessage("비밀번호를 입력해주세요.");
      return;
    }
    if (!passwordRegex.test(values.password)) {
      setErrorMessage("비밀번호 형식에 맞게 입력해주세요.");
      return;
    }
    const data = await instance.post("/login", JSON.stringify(values));
    if (data.data?.success) {
      dispatch(login(data.token));
      window.location.replace(`${staticServerUri}/`);
    } else {
      // eslint-disable-next-line no-alert
      setErrorMessage(data?.error?.message);
    }
  };

  return (
    <Container className="max-w-none">
      <Title className="flex pt-[50px] text-4xl leading-8 text-center justify-center">
        kakao
      </Title>
      <Box className="relative w-[580px] h-full mx-auto my-[40px] px-[69px] py-[50px] border border-gray-300 text-xs box-border justify-center">
        <InputGroup
          id="email"
          type="email"
          name="email"
          placeholder="이메일"
          value={values.email}
          onChange={handleChange}
          className="relative border-b-2 border-gray-300"
        />
        <InputGroup
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호"
          value={values.password}
          onChange={handleChange}
          className="relative border-b-2 border-gray-300"
        />
        {errorMessage && (
          <AlertBox
            id="errorMessage"
            className="mt-[20px] p-[20px] text-xs leading-5 bg-gray-50"
            label={errorMessage}
          />
        )}
        <Button
          onClick={() => {
            handleSubmit();
          }}
          className="block w-full h-[50px] mt-[40px] rounded-md font-normal text-base leading-12 text-gray-900 bg-yellow-kakao"
        >
          로그인
        </Button>
        <LinkButton
          to="/signup"
          onClick={() => {}}
          className="pt-[26px] text-[12px] leading-[18px]"
        >
          회원가입
        </LinkButton>
      </Box>
    </Container>
  );
};

export default LoginForm;
