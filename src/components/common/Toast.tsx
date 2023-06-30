import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import slideObj from '../../constants/slideObj';

interface IToast {
  content: string;
  position: string;
  bgColor: string;
  color: string;
  setToastContents: React.Dispatch<React.SetStateAction<{ content: string; id: number }[]>>;
}

interface ISlide {
  position: string;
  bgColor: string;
  color: string;
}
function Toast({ content, position, bgColor, color, setToastContents }: IToast) {
  const [slide, setSlide] = useState(true);
  useEffect(() => {
    const slideOutTimerId = setTimeout(() => {
      setSlide(false);
    }, 2500);
    const removeTimerId = setTimeout(() => {
      setToastContents((prev) => prev.slice(1));
    }, 3000);
    return () => {
      clearTimeout(slideOutTimerId);
      clearTimeout(removeTimerId);
    };
  }, []);

  if (slide)
    return (
      <SlideIn bgColor={bgColor} color={color} position={position}>
        {content}
      </SlideIn>
    );
  return (
    <SlideOut bgColor={bgColor} color={color} position={position}>
      {content}
    </SlideOut>
  );
}

export default Toast;

const Wrap = styled.div`
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 0 5px gray;
`;
const SlideIn = styled(Wrap)<ISlide>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  animation: 0.5s ${(props) => slideObj[props.position]['slide-in']};
`;
const SlideOut = styled(Wrap)<ISlide>`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  animation: 0.5s ${(props) => slideObj[props.position]['slide-out']};
`;
