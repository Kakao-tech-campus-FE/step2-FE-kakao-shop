import { styled } from 'styled-components';

/**
 * 자식 컴포넌트를 감싸는 form 컴포넌트, 레이아웃 적용
 * @param {ReactNode} children - 하위 컴포너트
 * @param {function} onSubmit - Form 제출 시 실행되는 함수
 * @returns {JSX.Element} 컴포넌트 반환
 */

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
