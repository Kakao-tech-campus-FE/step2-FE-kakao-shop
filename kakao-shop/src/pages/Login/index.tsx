import styled from '@emotion/styled';

import Footer from '@components/molecules/Footer';
import LoginForm from '@components/page/Login/LoginForm';
import Title from '@components/page/SignUp/Title';

const Login = () => {
  return (
    <S.Root>
      <Title />
      <LoginForm />
      <Footer />
    </S.Root>
  );
};

export default Login;

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
  `,
};
