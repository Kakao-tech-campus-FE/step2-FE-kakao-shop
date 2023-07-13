import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

type InputProps = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ id, type = 'text', className, ...props }: InputProps) => {
  return <S.Input className={className} id={id} type={type} {...props} />;
};

export default Input;

const S = {
  Input: styled.input``,
};
