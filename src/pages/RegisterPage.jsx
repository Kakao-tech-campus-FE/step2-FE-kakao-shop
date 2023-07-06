//RegisterPage에는 RegisterForm 밖에 안들어가는데 굳이 분리를 해야하는 이유?
//최상단 컴포넌트를 우리가 page라고 명시했기 때문에 분리하여 관리
//추후에 RegisterPage에 다른 컴포넌트들이 추가될 여지가 있기 때문에 분리
//페이지에서 이용되는 API 관리 코드가 추가될 수 있기 때문

import RegisterForm from "../components/organisms/RegisterForm";

const RegisterPage = () => {
  return <RegisterForm />;
};

export default RegisterPage;
