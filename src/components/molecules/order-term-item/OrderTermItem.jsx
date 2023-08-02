import styled from "styled-components";
import CheckBox from "@/components/atoms/check-box/CheckBox.jsx";

const Styled = {
  Container: styled.div`
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  Text: styled.div`
    margin-left: 0.5rem;
    cursor: pointer;
  `,
};

function OrderTermItem({ isChecked, handleCheck, children, id, ...props }) {
  return (
    <Styled.Container {...props}>
      <CheckBox id={id} isChecked={isChecked} handleCheck={handleCheck} />
      <Styled.Text onClick={handleCheck}>{children}</Styled.Text>
    </Styled.Container>
  );
}

export default OrderTermItem;
