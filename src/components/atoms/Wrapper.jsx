import { styled } from 'styled-components';

/**
 * 하위 컴포넌트를 감싸는 스타일링된 div 컴포넌트
 * @param {ReactNode} children - 하위 컴포넌트
 * @param {string} className - 컴포넌트 클래스명
 * @returns
 */

const Wrapper = ({ children, className = '' }) => {
    return <StyledWrapper className={`wrapper ${className}`}>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
    padding: ${({ theme }) => theme.padding.xxxl};
    margin: ${({ theme }) => theme.margin.xl};
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Layout */
    background-color: #fff;
    border-radius: ${({ theme }) => theme.border.rad_base};
`;

export default Wrapper;
