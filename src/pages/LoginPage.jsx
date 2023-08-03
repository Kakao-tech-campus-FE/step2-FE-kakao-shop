import Title from '../components/atoms/Title';
import Wrapper from '../components/atoms/Wrapper';
import LoginForm from '../components/organisms/LoginForm';
import FORM_DEFAULT from '../constants/FORM_DEFAULT';
import FORM_INFO from '../constants/FORM_INFO';
import Text from '../components/atoms/Text';
import URL from '../constants/URL';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <Wrapper>
            <Title>LOGIN</Title>
            <LoginForm
                inputInfo={FORM_INFO.LOGIN}
                defaultValue={FORM_DEFAULT.LOGIN}
                buttonLabel="로그인"
            />
            <Link to={URL.SIGNUP}>
                <Text className="font-light text-gray-500 text-xs">회원가입</Text>
            </Link>
        </Wrapper>
    );
};

export default LoginPage;
