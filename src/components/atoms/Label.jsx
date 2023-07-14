import styled from 'styled-components';

/**
 * label 요소를 생성하는  컴포넌트
 * @param {string} htmlFor - input의 id나 name을 적어 input과 연결해주는 값
 * @param {ReactNode} children - 하위 컴포넌트
 * @param {string} className - 컴포넌트에 할당되는 클래스명
 * @returns {JSX.Element} 컴포넌트 반환
 */

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
