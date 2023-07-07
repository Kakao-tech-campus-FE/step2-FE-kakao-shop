import styled from '@emotion/styled';

import Footer from '@components/page/SignUp/Footer';
import SignUpForm from '@components/page/SignUp/SignUpForm';
import Title from '@components/page/SignUp/Title';

const SignUp = () => {
  return (
    <S.Root>
      <Title />
      <SignUpForm />
      <Footer />
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
