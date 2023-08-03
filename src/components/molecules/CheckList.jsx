import styled from "styled-components";

const InputCheck = styled.input`
  width: 1rem;
  height: 1rem;
  appearance: none;
  outline: none;
  border: 2px solid gray;
  border-radius: 0.2rem;
  transition: background-color 250ms linear;
  margin-right: 0.8rem;
  position: relative;

  &:checked {
    background-color: #ffee00;
    border-color: #ffee00;
  }

  &:checked::before {
    content: "";
    position: absolute;
    top: 0.2rem;
    left: 0.4rem;
    width: 0.3rem;
    height: 0.6rem;
    border: solid black;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const CheckList = ({ id, name, htmlFor, children, checked, onChange }) => {
  return (
    <>
      <InputCheck
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={htmlFor}>{children}</label>
    </>
  );
};

export default CheckList;
