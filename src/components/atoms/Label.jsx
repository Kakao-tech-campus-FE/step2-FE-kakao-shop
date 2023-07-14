import styled from 'styled-components';

const Label = ({ htmlFor, children, className = '' }) => {
    return (
        <StyledLabel htmlFor={htmlFor} className={className}>
            {children}
        </StyledLabel>
    );
};

const StyledLabel = styled.label`
    display: block;
    margin-bottom: ${({ theme }) => theme.margin.small};
    font-size: ${({ theme }) => theme.fontSize.small};
    font-weight: 400;
    color: ${({ theme }) => theme.color.gray};
`;

export default Label;
