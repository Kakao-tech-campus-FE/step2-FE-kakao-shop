import { styled } from 'styled-components';

/**
 * 페이지 Heading 컴포넌트
 * @param {ReactNode} children - 하위 컴포넌트
 * @returns {JSX.Element} 컴포넌트 반환
 */

const Title = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
};

const StyledTitle = styled.h1`
    margin: ${({ theme }) => theme.margin.xl};
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    font-weight: 700;
`;

export default Title;
