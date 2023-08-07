import styled from "styled-components";

const InputCheck = styled.input`
  width: 1.5rem;
  height: 1.5rem;
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

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
`;

const CheckList = ({ htmlFor, children, ...inputProps }) => {
  return (
    <>
      <Container>
        <InputCheck type="checkbox" {...inputProps} />
        <label htmlFor={htmlFor}>{children}</label>
      </Container>
    </>
  );
};

export default CheckList;
