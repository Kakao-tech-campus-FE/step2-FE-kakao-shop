import { styled } from 'styled-components';

const Form = ({ children, onSubmit }) => {
    return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.padding.base};
    margin: ${({ theme }) => theme.margin.base};
`;

export default Form;
