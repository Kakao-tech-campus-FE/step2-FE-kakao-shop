import styled from 'styled-component';

const Label = ({ htmlFor, content = '', className = '' }) => {
    return (
        <StyledLabel htmlFor={htmlFor} className={className}>
            {content}
        </StyledLabel>
    );
};

const StyledLabel = styled.label``;

export default Label;
