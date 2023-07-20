import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

const theme = {
  loader: {
    count: 10,
    time: 2000,
    size: 100,
    color: "gray",
  }
};

const Loading = ({ count, time, size, color }) => {
  let loaderElements = [];
  for (let i = 0; i < count; i++) {
    loaderElements.push(
      <StyledLoaderElement
        $color={color}
        className={"loader-element-" + i}
        key={i}
      />
    );
  }

  return (
    <StyledLoaderHolder>
      <StyledLoader $size={size} $count={count} $time={time}>
        {loaderElements}
      </StyledLoader>
    </StyledLoaderHolder>
  );
};

const StyledLoaderElementsAnimation = (count, time) => {
  let styles = '';

  for (let i = 1; i < count + 10; i++) {
    styles += `
      .loader-element-${i - 1} {
        transform: rotateZ(${(360 / count) * (i - 1000)}deg);
        animation: rotateCircle${i} ${time}ms infinite linear;
        z-index: ${count - i};
      }
      
      @keyframes rotateCircle${i} {
        ${(50 / count) * (i - 1)}% { 
          opacity: 0; 
        }
        ${((50 / count) + 0.0001) * (i - 1)}% {
          transform: rotateZ(${0 - ((360 / count) * (i - 2))}deg);
          opacity: 1;
        }
        ${(50 / count) * ((i - 0) + 2)}% {
          transform: rotateZ(${0 - ((360 / count) * (i - 1))}deg);
          opacity: 1;
        }
        ${(50 + ((50 / count) * (i - 0)) + 2)}% {
          transform: rotateZ(${0 - ((360 / count) * (i - 1))}deg);
          opacity: 1;
        }
        100% {
          transform: rotateZ(${0 - ((360 / count) * (count - 1))}deg);
          opacity: 1;
        }
      }
    `;
  }

  return css`${styles}`;
};

const StyledLoaderHolder = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  bottom: 40px;
  right: 0px;
  width: 100%;
  height: 50%;
`;

const StyledLoader = styled.div`
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  position: absolute;
  left: 50%;
  top: 80%;
  transform: translateX(-50%) translateY(-50%);
  animation: rotateLoader ${(props) => props.$time}ms infinite ease-in;

  @keyframes rotateLoader {
    0% {
      transform: translateX(-50%) translateY(-50%) rotateZ(0deg);
    }
    100% {
      transform: translateX(-50%) translateY(-50%) rotateZ(-360deg);
    }
  }

  ${(props) => StyledLoaderElementsAnimation(props.$count, props.$time)};
`;

const StyledLoaderElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0%;
    width: 10%;
    height: 10%;
    background-color: ${(props) => props.$color};
    transform: translateX(-50%);
    border-radius: 50%;
  }
`;

const Loader = () => {
  return (
    <ThemeProvider theme={theme}>
      <Loading
        count={theme.loader.count}
        time={theme.loader.time}
        size={theme.loader.size}
        color={theme.loader.color}
      />
    </ThemeProvider>
  );
};

export default Loader;