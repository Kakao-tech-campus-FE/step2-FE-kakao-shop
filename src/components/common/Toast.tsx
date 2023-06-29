import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

function Toast({ content, position }: { content: string; position: string }) {
  const [visible, setVisible] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, []);

  return visible ? <Wrap position={position}>{content}</Wrap> : null;
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
  animation: 1s linear 2s ${toastFaded};
`;
