import React, { ReactNode } from 'react';
import { styled } from 'styled-components';
import colors from '../../../constants/colors';

interface SubmitBtnProps {
  children: ReactNode;
  callback: Function;
}
export default function SubmitBtn({ children, callback }: SubmitBtnProps) {
  const submitHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    callback();
  };
  return (
    <Wrap type="submit" onClick={submitHandler}>
      {children}
    </Wrap>
  );
}

const Wrap = styled.button`
  width: 100%;
  font-size: 18px;
  padding: 10px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  background-color: ${colors.yellow};
  cursor: pointer;
`;
