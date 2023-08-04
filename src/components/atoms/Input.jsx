import { styled } from 'styled-components';

/**
 * 다양한 input 필드를 렌더링 하는 컴포넌트
 * @param {string} id - input 필드 고유 식별자
 * @param {string} type - input의 type
 * @param {function} onChange - 입력 값이 변경될 때 실행되는 함수
 * @param {string} name - input 필드 이름
 * @param {string} value - input 필드의 현재 값
 * @param {string} placeholder - input 필드에 나타날 플레이스홀더 텍스트
 * @param {boolean} required - input 필드가 필수인지 여부를 나타내는 값
 * @returns {JSX.Element} 컴포넌트 반환
 */

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