import styled from "styled-components";

const Btn = styled.button`
  all: unset;
  text-align: center;
  font-weight: bold;
  cursor: pointer;

  width: 32rem;

  margin-top: 1.5rem;
  padding: 0.6rem;
  border-radius: 6px;

  background-color: #ffe600;
`;

const SubmitButton = ({ type, children, onClick }) => {
  // type: 버튼의 type 지정(submit, click)
  // children: 버튼 내부 텍스트
  // onClick: 클릭 이벤트
  return (
    <Btn
      type={type}
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
