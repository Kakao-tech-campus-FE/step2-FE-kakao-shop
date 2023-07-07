import styled from '@emotion/styled';

const Button = styled.button`
  width: 100%;

  border: none;

  cursor: pointer;

  border: 2px solid transparent; // 트릭 tab으로 접근시 포커스되는 요소에 border를 그려준다. 이때 요소크기가 변경되는게 거슬려서 적용한 css이다.

  &:focus {
    border: 2px solid #0047ab;
  }
`;

export default Button;
