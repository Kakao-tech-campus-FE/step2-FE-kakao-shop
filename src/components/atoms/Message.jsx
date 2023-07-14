import { styled } from 'styled-components';

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
