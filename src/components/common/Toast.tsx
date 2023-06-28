import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const positionObj = {
  center: 'top:50%; right:50%;',
  'top-right': 'top:3%; right:3%;',
  'top-center': 'top:3%; right:50%',
  'top-left': 'top:3%; left:3%',
  'bottom-right': 'bottom:3%;right:3%',
  'bottom-center': 'bottom:3%; right:50%',
  'bottom-left': 'bottom:3%; left:3%',
};
function Toast({
  content,
  position,
}: {
  content: string;
  position: 'center' | 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
}) {
  const [visible, setVisible] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      //   setVisible(false);
    }, 3000);
  }, []);

  return visible ? <Wrap position={positionObj[position]}>{content}</Wrap> : null;
}

export default Toast;

const toastFaded = keyframes`
    from{
        opacity:1;
    }
    to{
        opacity:0;
    }
`;

const Wrap = styled.div<{ position: string }>`
  position: fixed;
  padding: 10px;
  ${(props) => props.position};
  border-radius: 10px;
  box-shadow: 0 0 5px gray;
  animation: 1s linear 2.5s infinite ${toastFaded};
`;
