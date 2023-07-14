import { styled } from 'styled-components';

const Input = ({ id, type, onChange, name, value, placeholder, required = false }) => {
    return (
        <StyledInput
            id={id}
            type={type}
            onChange={onChange}
            name={name}
            value={value}
            placeholder={placeholder}
            required={required}
        />
    );
};

const StyledInput = styled.input`
    padding: ${({ theme }) => theme.padding.lg};
    min-width: 20rem;

    border: 2.5px solid ${({ theme }) => theme.color.gray};
    border-radius: ${({ theme }) => theme.border.rad_base};
    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.color.light_green};
    }
`;

export default Input;
