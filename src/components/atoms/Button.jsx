import styled from "styled-components";

const StyledButton =
  // 아래의 style이 입혀진 button 태그를 생성
  styled.button`
    display: block;
    width: 100%;
    height: 60px;
    border-radius: 4px;
    font-weight: 400;
    font-size: 22px;
    line-height: 51px;
    border: 1px solid white;
    color: #191919;
    background: #fee500;
    cursor: pointer;
  `;

const Button = ({ onClick, children, className }) => {
  //'onClick' : 버튼이 클릭 되었을 때 이벤트 값을 받음
  //'children' : button 내부에 표시 될 내용
  return (
    <StyledButton
      className={className}
      type="button"
      // 타입 설정 안해줘도 버튼 되지만, 개발자 도구에서 속성 입력하라는것 때문에 그냥 해줌
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {/* onClick이벤트 정의 할 때 preventDefault 해주면 안되는지? */}
      {children}
    </StyledButton>
  );
};
export default Button;
