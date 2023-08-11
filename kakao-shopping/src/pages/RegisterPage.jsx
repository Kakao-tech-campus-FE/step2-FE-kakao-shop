import RegisterForm from "../components/organisms/RegisterForm";

// 나누는 이유? 명시적으로 최상단 컴포넌트를 page라고 정했고 (1), 페이지 단위로 api 요청 + 컴포넌트 추후 추가 가능
const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
