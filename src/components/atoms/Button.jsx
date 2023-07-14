import { styled } from 'styled-components';

const SubmitButton = ({ children, className = '', onClick }) => {
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

export default SubmitButton;
