import styled from '@emotion/styled';

import Footer from '@components/domains/SignUp/Footer';
import SignUpForm from '@components/domains/SignUp/SignUpForm';
import Title from '@components/domains/SignUp/Title';

const SignUp = () => {
  return (
    <S.Root>
      <Title></Title>
      <SignUpForm />
      <Footer></Footer>
    </S.Root>
  );
};

export default SignUp;

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
  `,
};
