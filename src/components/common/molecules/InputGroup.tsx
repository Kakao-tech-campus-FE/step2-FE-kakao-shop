import React, { forwardRef } from 'react';
import Label from '../atoms/Label';
import InputBox from '../atoms/InputBox';
import { styled } from 'styled-components';

interface InputGroupProps {
  id: string;
  title: string;
  name: string;
  type: string;
  placeholder: string;
}
const InputGroup = forwardRef(({ id, title, type, name, placeholder }: InputGroupProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  return (
    <Wrap>
      <Label id={id}>{title}</Label>
      <InputBox id={id} name={name} ref={ref} type={type} placeholder={placeholder} />
    </Wrap>
  );
});

export default InputGroup;

const Wrap = styled.div`
  flex: 1;
`;
