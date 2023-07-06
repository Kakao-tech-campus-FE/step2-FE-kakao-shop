import styled from "styled-components";

const Btn = styled.button`
  all: unset;
  text-align: center;
  cursor: pointer;

  width: ${(props) => props.styles.width || 0};
  padding: ${(props) => props.styles.padding || 0};

  border-radius: ${(props) => props.styles.borderRadius || 0};
  background-color: ${(props) => colors[props.styles.backgroundColor]};
  font-weight: ${(props) => props.styles.fontWeight || "400"};
`;

const colors = {
  yellow: "#ffe600",
  black: "#000000",
  white: "#ffffff",
};

const Button = ({ type, children, onClick, ...styles }) => {
  // type: 버튼의 type 지정(submit, click)
  // children: 버튼 내부 텍스트
  // onClick: 클릭 이벤트
  // styles: 버튼의 스타일 지정
  return (
    <Btn
      type={type}
      {...styles}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </Btn>
  );
};

export default Button;
