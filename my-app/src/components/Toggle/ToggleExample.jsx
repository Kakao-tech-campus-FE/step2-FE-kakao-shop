import React, { useState } from "react";
import { styled } from "styled-components";

const ToggleContainer = styled.div`
  margin: 20px;
  width: 300px;
  height: 300px;
  font-size: 40px;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default function ToggleExample() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <ToggleContainer onClick={handleToggle}>
        {isOn ? <div>✅ Toggle On</div> : <div>❌ Toggle Off</div>}
      </ToggleContainer>
    </>
  );
}
