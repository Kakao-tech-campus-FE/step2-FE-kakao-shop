import { styled } from 'styled-components';
import { tokenAtom } from '../../store';
import Button from '../atoms/Button';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import URL from '../../constants/URL';

const Header = () => {
    const [token, setToken] = useAtom(tokenAtom);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        if (token.length > 0) {
            setToken('');
            console.log(token);
        } else {
            navigate(URL.LOGIN);
        }
    };
    const handleSignUpClick = () => {
        navigate(URL.SIGNUP);
    };
    return (
        <StyledHeader>
            <Button className="header" onClick={handleLoginClick}>
                {token.length === 0 ? '로그인' : '로그아웃'}
            </Button>
            {token.length === 0 ? (
                <Button className="header" onClick={handleSignUpClick}>
                    회원가입
                </Button>
            ) : null}
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
`;

export default Header;
