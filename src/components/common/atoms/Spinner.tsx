import React from 'react';
import { styled, keyframes } from 'styled-components';
import colors from '../../../constants/colors';

interface SpinnerProps {
  width: number;
  height: number;
}
function Spinner({ width, height }: SpinnerProps) {
  return (
    <Wrap>
      <SpinnerIcon width={width} height={height} />
    </Wrap>
  );
}

export default Spinner;

const spinnerAnimation = keyframes`
    from {transform: rotate(0deg); }
    to {transform: rotate(360deg);}
`;

const Wrap = styled.div`
width:100%;
height:100%:
display:flex;
justify-content:center;
align-items:center;
`;

const SpinnerIcon = styled.div<SpinnerProps>`
  border-radius: 50%;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 8px solid ${colors.gray};
  border-top-color: ${colors.yellow};
  animation: ${spinnerAnimation} 1s ease infinite;
`;
