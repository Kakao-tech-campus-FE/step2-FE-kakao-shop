import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
`;

const LinkText = ({ text, to, className, onClick }) => {
    return (
        <span>
            <StyledLink to={to} className={className} onClick={text === '로그인' || '로그아웃' ? onClick : null}>
                {text}
            </StyledLink>
        </span>
    );
};

export default LinkText;
