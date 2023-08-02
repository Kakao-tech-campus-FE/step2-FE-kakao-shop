import { styled } from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Background = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Background;

const Wrapper = styled.div`
  height: 100vh;
  min-width: 1280px;
  background-color: #f4f4f4;
  overflow: auto;
`;
