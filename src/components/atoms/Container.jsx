import { styled } from 'styled-components';

/**
 * 자식 컴포넌트를 감싸는 역할을 하는 컴포넌트, 간단한 레이아웃 및 스타일이 적용됨
 * @param {ReactNode} children - 하위 컴포넌트
 * @param {string} className - 컴포넌트에 적용될 클래스명
 * @returns {JSX.Element} 컴포넌트 반환
 */

const Container = ({ children, className = '' }) => {
    return <StyledContainer className={`container ${className}`}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
    padding: ${({ theme }) => theme.padding.base};
    margin: ${({ theme }) => theme.margin.sm};

    &.page {
        width: 100%;
        height: 100%;
    }
`;

export default Container;
