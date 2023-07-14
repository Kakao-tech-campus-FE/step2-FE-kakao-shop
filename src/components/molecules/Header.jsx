import { styled } from 'styled-components';
import { jwtAtom } from '../../store';
import Button from '../atoms/Button';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [jwt, setJwt] = useAtom(jwtAtom);
    const navigate = useNavigate();

    const handleLoginClick = () => {
        if (jwt.length > 0) {
            setJwt('');
            console.log(jwt);
        } else {
            navigate('/login');
        }
    };
    const handleSignUpClick = () => {
        navigate('/signup');
    };
    return (
        <StyledHeader>
            <Button className="header" onClick={handleLoginClick}>
                {jwt.length === 0 ? '로그인' : '로그아웃'}
            </Button>
            {jwt.length === 0 ? (
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
