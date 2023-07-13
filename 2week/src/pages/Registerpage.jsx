import RegisterForm from "../components/organisms/RegisterForm"

const RegisterPage = () => {
  return <RegisterForm />
}

export default RegisterPage

/* 
  RegisterPage는 RegisterForm밖에 불러오지 않는데 나누는 이유
    1. 최상단 컴포넌트를 page로 명시했기 때문에 분류
    2. API 요청이나, 컴포넌트가 추가될 여지가 있기 때문에 (통일성 때문에)
*/