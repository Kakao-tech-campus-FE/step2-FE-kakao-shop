import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

type Props = {
  id?: string;
  className?: string;
};

const Label = ({ children, id, className }: PropsWithChildren<Props>) => {
  return (
    <S.Label className={className} htmlFor={id}>
      {children}
    </S.Label>
  );
};

export default Label;

const S = {
  Label: styled.label``,
};
