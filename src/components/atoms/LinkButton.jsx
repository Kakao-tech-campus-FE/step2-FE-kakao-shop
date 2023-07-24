import styled from "styled-components";

const Btn = styled.button`
  all: unset;
  text-align: center;
  cursor: pointer;

  width: 5rem;
  font-weight: ${(props) => props.styles.fontWeight || "400"};
`;

const LinkButton = ({ type, children, onClick, ...styles }) => {
  // type: 버튼의 type 지정(submit, click)
  // children: 버튼 내부 텍스트
  // onClick: 클릭 이벤트
  // styles: 버튼의 스타일 지정
  return (
    <Btn type={type} {...styles} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default LinkButton;
