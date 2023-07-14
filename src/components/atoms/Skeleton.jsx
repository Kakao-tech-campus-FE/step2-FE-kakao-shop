import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const Container = styled.div`
  width: 16rem;
  .container {
    position: relative;
    height: fit-content;
    padding: 10px;
    border-radius: 10px;

    background: #fdfefe;
    box-shadow: 10px 10px 0px -1px rgba(0, 0, 0, 0.23);
  }

  .column {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .row ~ .column {
    margin-top: 10px;
  }

  .square {
    height: 250px;
    width: 250px;
    border-radius: 10px;
  }

  .line {
    margin-top: 15px;
    height: 20px;
    width: 300px;
    border-radius: 50px;
  }

  .line1 {
    width: 80%;
  }

  .line2 {
    width: 40%;
  }

  .loading-animation {
    overflow: hidden;
    background: #d0d0d0;
  }

  .loading-animation::before {
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    animation: ${loadingAnimation} 1s infinite;
    background: linear-gradient(to right, transparent, #d9d9d9, transparent);
  }
`;

const Skeleton = () => {
  return (
    <Container>
      <div className="row">
        <div className="square loading-animation"></div>
      </div>
      <div className="column">
        <div className="line line1 loading-animation"></div>
      </div>
      <div className="row">
        <div className="line line2 loading-animation"></div>
      </div>
    </Container>
  );
};

export default Skeleton;
