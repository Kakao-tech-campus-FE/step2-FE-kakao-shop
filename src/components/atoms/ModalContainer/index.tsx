import { styled } from "styled-components";

interface Props {
  children: React.ReactNode;
}

const ModalContainer = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ModalContainer;

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 71%);
`;
