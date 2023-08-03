import { styled } from "styled-components";

interface Props {
  children: React.ReactNode;
}

const InnerContainer = ({ children }: Props) => {
  return <Inner>{children}</Inner>;
};

export default InnerContainer;

const Inner = styled.div`
  width: 80%;
  height: 80px;
  margin: 0 auto;

  @media screen and (max-width: 1023px) {
    width: 95%;
  }
`;
