import styled from "styled-components";

const Btn = styled.button`
  all: unset;
  text-align: center;
  cursor: pointer;

  width: 4rem;
  font-size: 0.9rem;
`;

const LinkButton = ({ type, children, onClick, icons, ...styles }) => {
  // type: 버튼의 type 지정(submit, click)
  // children: 버튼 내부 텍스트
  // onClick: 클릭 이벤트
  // styles: 버튼의 스타일 지정
  return (
    <Btn type={type} onClick={onClick} {...styles}>
      {children}
      {icons}
    </Btn>
  );
};

export default LinkButton;
