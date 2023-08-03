import styled from "styled-components";

const Styled = {
  Container: styled.div``,
  Input: styled.input`
    display: none;

    &:checked + label::after {
      content: url("https://img.icons8.com/sf-black/24/ffffff/checkmark.png");
      font-size: 0.75rem;
      width: 1.25rem;
      height: 1.25rem;

      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #ffea00;
    }
  `,
  Label: styled.label`
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    border: ${({ theme }) => theme.border.default};
    position: relative;
    cursor: pointer;
    box-sizing: content-box;

    &:checked {
      border: none;
    }
  `,
};

function CheckBox({ id, isChecked, handleCheck, ...props }) {
  return (
    <Styled.Container {...props}>
      <Styled.Input
        id={id}
        type="checkbox"
        onChange={handleCheck}
        checked={isChecked}
      />
      <Styled.Label htmlFor={id} />
    </Styled.Container>
  );
}

export default CheckBox;
