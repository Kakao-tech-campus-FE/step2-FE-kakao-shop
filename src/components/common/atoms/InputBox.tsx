import React, { forwardRef } from 'react';
import { styled } from 'styled-components';
import colors from '../../../constants/colors';
interface InputProps {
  id: string;
  name: string;
  type: string;
  placeholder: string;
}
const InputBox = forwardRef(({ id, name, type, placeholder }: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  return <Input id={id} name={name} ref={ref} type={type} placeholder={placeholder} />;
});

export default InputBox;

const Input = styled.input`
  border: 1px solid ${colors.gray};
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  padding: 8px;
  margin: 10px 0;
`;
