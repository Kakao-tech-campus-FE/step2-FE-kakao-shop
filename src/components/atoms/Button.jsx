import { styled } from 'styled-components';

/**
 * type이 "button"인 Button Component
 * @param {ReactNode} children - 하위 컴포넌트
 * @param {string} className - 클래스 이름
 * @param {function} onClick - 버튼 클릭 시 실행되는 함수
 * @returns {JSX.Element} 컴포넌트 반환
 */

const Button = ({ children, className = '' }) => {
    return (
        <StyledButton className={className} onClick={onClick} type="button">
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    padding: ${({ theme }) => theme.padding.lg};
    min-width: 20rem;
    margin-top: ${({ theme }) => theme.margin.xxxl};
    margin-bottom: ${({ theme }) => theme.margin.base};

    /* Layout */
    font-size: ${({ theme }) => theme.fontSize.base};

    border: 2px solid ${({ theme }) => theme.color.green};
    border-radius: ${({ theme }) => theme.border.rad_base};

    background-color: ${({ theme }) => theme.color.green};
    color: ${({ theme }) => theme.color.white};

    &.header {
        border-color: ${({ theme }) => theme.color.white};
        min-width: 7rem;
        font-size: ${({ theme }) => theme.fontSize.small};
        background-color: ${({ theme }) => theme.color.white};
        color: ${({ theme }) => theme.color.black};
    }

    &.header:hover {
        border-color: ${({ theme }) => theme.color.green};
        background-color: ${({ theme }) => theme.color.green};
        color: ${({ theme }) => theme.color.white};
    }
`;

export default Button;
