import styled from "styled-components";

const MsgLabel = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.color};
`;

const Msg = ({ children, msgColor }) => {
  // children: 에러 메시지 내용
  return (
    <>
      <MsgLabel color={msgColor}>{children}</MsgLabel>
    </>
  );
};

export default Msg;
