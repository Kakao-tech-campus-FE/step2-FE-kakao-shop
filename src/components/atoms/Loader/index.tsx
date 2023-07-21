import { styled } from "styled-components";
import spinner from "@assets/images/Spinner-1s-225px.gif";

const Loader = () => {
  return (
    <Background>
      <img src={spinner} alt={"loader"} />
    </Background>
  );
};

export default Loader;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
