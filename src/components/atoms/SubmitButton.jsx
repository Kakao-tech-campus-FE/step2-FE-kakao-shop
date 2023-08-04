import styled from "styled-components";

const Btn = styled.button`
  all: unset;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  margin: 1.5rem 0;
  padding: 0.6rem 0;
  border-radius: 6px;

  background-color: ${(prop) => prop.backgroundColor || "#ffe600"};
`;

const SubmitButton = ({ type, backgroundColor, children, onClick }) => {
  // type: 버튼의 type 지정(submit, click)
  // children: 버튼 내부 텍스트
  // onClick: 클릭 이벤트
  return (
    <Btn
      type={type}
      backgroundColor={backgroundColor}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </Btn>
  );
};

export default SubmitButton;
