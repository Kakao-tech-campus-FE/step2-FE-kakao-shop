import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  z-index: 10001;
  gap: 12px;
`;

const Toast = ({ setToast }: any) => {
  return <Wrapper>Toast</Wrapper>;
};

export default Toast;
