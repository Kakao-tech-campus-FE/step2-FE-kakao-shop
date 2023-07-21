import { styled } from 'styled-components';

/**
 * Text를 반환하는 컴포넌트
 * @param {ReactNode} children - 하위 컴포넌트
 * @param {string} className - 컴포넌트 클래스명
 * @returns {JSX.Element} 컴포넌트 반환
 */

const Text = ({ children, className = '' }) => {
    return <StyledText className={className}>{children}</StyledText>;
};

const StyledText = styled.p`
    margin: ${({ theme }) => theme.margin.small} 0;
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 400;

    &.error {
        color: ${({ theme }) => theme.color.red};
    }

    &.base {
        font-size: ${({ theme }) => theme.fontSize.base};
    }

    &.lg {
        font-size: ${({ theme }) => theme.fontSize.lg};
    }

    &.xl {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }

    &.bold {
        font-weight: 600;
    }
`;

export default Text;
