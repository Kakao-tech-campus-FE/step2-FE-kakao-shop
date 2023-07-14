import Title from '../components/atoms/Title';
import Wrapper from '../components/atoms/Wrapper';
import SignUpForm from '../components/organisms/SignUpForm';
import FORM_DEFAULT from '../constants/FORM_DEFAULT';
import FORM_INFO from '../constants/FORM_INFO';

const SignUpPage = () => {
    return (
        <Wrapper>
            <Title>Sign Up</Title>
            <SignUpForm
                inputInfo={FORM_INFO.SIGNUP}
                defaultValue={FORM_DEFAULT.SIGNUP}
                buttonLabel="회원가입"
            />
        </Wrapper>
    );
};

export default SignUpPage;
