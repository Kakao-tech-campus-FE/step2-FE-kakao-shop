import { styled } from 'styled-components';

/**
 * Text를 반환하는 컴포넌트
 * @param {ReactNode} children - 하위 컴포넌트
 * @param {string} className - 컴포넌트 클래스명
 * @returns {JSX.Element} 컴포넌트 반환
 */

const Message = ({ children, className = '' }) => {
    return <StyledMessage className={className}>{children}</StyledMessage>;
};

const StyledMessage = styled.p`
    margin: ${({ theme }) => theme.margin.small} 0;
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 400;

    &.error {
        color: ${({ theme }) => theme.color.red};
    }
`;

export default Message;
