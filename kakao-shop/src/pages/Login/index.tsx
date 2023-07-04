import styled from '@emotion/styled';

import LoginForm from '@components/domains/Login/LoginForm';
import Footer from '@components/domains/SignUp/Footer';
import Title from '@components/domains/SignUp/Title';

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
