import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  50% {
    box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px;
  }
  100% {
    box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px;
  }
`;

const Loading = styled.section`
  margin: 10px 10px;
  padding: 10px 10px;
  display: grid;
  place-items: center;
`;

const PaytmLoader = styled.div`
  color: #002e6e;
  width: 3px;
  aspect-ratio: 1;
  border-radius: 50%;
  box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
  transform: translateX(-38px);
  animation: loader 0.5s infinite alternate linear;
  -webkit-box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
  -webkit-transform: translateX(-38px);
  -webkit-animation: ${loadingAnimation} 0.5s infinite alternate linear;
`;

const Loader = () => {
  return (
    <Loading>
      <PaytmLoader className="paytm-loader" />
    </Loading>
  );
};

export default Loader;
