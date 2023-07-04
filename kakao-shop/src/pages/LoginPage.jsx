import InputGroup from "../components/molecules/InputGroup";

const LoginPage = () => {
  return (
    <div>
      <image src="/logoKakaoText.png" alt="kakao" />
      <InputGroup id="email" type="email" placeholder="이메일" label="이메일" />
    </div>
  );
};

export default LoginPage;
