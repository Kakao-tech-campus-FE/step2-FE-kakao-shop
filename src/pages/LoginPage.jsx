import Title from '../components/atoms/Title';
import Wrapper from '../components/atoms/Wrapper';
import LoginForm from '../components/organisms/LoginForm';
import FORM_DEFAULT from '../constants/FORM_DEFAULT';
import FORM_INFO from '../constants/FORM_INFO';

const LoginPage = () => {
    return (
        <Wrapper>
            <Title>LOGIN</Title>
            <LoginForm
                inputInfo={FORM_INFO.LOGIN}
                defaultValue={FORM_DEFAULT.LOGIN}
                buttonLabel="로그인"
            />
        </Wrapper>
    );
};

export default LoginPage;
