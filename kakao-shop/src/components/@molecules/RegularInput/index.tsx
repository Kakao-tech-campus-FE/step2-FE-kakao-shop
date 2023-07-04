import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import hideWithA11y from '@styles/a11y';
import { PropsWithChildren, InputHTMLAttributes } from 'react';

import { Input, Label } from '@components/@base';

type Props = {
  LabelClassName?: SerializedStyles;
  InputClassName?: SerializedStyles;
} & InputHTMLAttributes<HTMLInputElement>;

const RegularInput = ({
  children,
  id,
  type = 'text',
  LabelClassName,
  InputClassName,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <S.Root>
      <Label id={id} css={LabelClassName}>
        {children}
      </Label>
      <Input id={id} type={type} {...props} css={InputClassName} />
    </S.Root>
  );
};

RegularInput.HiddenLabel = function ({
  children,
  id,
  type = 'text',
  InputClassName,
  ...props
}: PropsWithChildren<Props>) {
  console.log(props);
  return (
    <S.Root>
      <Label id={id} css={hideWithA11y}>
        {children}
      </Label>
      <Input id={id} type={type} {...props} css={InputClassName} />
    </S.Root>
  );
};

export default RegularInput;

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 4px;
  `,
};
