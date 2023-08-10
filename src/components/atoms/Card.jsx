import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

/**
 * 클릭 시 지정된 URL로 이동하는 카드 UI 컴포넌트
 * @param {url} to - 컴포넌트 클릭 시 이동하는 url
 * @param {ReactNode} children - 하위 컴포넌트
 * @param {string} className - 컴포넌트 클래스 명
 * @returns {JSX.Element} 컴포넌트 반환
 */

const Card = ({ to, children, className = '' }) => {
    return (
        <StyledLink className={`card border-2 rounded-sm p-5 ${className}`} to={to}>
            {children}
        </StyledLink>
    );
};

const StyledLink = styled(Link)`
    display: grid;
    grid-template-rows: 11fr 3.4fr 1fr;
    gap: 0.5rem;
    color: ${({ theme }) => theme.color.black};
`;

export default Card;
