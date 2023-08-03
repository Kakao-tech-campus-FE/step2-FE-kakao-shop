import minusIcon from '@assets/minus.webp';
import plusIcon from '@assets/plus.webp';
import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';
import hideWithA11y from '@styles/a11y';
import { PropsWithChildren, InputHTMLAttributes, MouseEventHandler } from 'react';

import { Button, Input, Label, Photo } from '@components/atom';

type Props = {
  RootClassName?: SerializedStyles;
  LabelClassName?: SerializedStyles;
  InputClassName?: SerializedStyles;
} & InputHTMLAttributes<HTMLInputElement>;

const RegularInput = ({
  children,
  id,
  type = 'text',
  RootClassName,
  LabelClassName,
  InputClassName,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <S.Root css={RootClassName}>
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
  RootClassName,
  InputClassName,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <S.Root css={RootClassName}>
      <Label id={id} css={hideWithA11y}>
        {children}
      </Label>
      <Input id={id} type={type} {...props} css={InputClassName} />
    </S.Root>
  );
};

type CounterInputProps = {
  value: number;
  onClickPlusButton?: MouseEventHandler<HTMLButtonElement>;
  onClickMinusButton?: MouseEventHandler<HTMLButtonElement>;
} & InputHTMLAttributes<HTMLInputElement>;

RegularInput.Counter = function CounterInput({
  id,
  value,
  onClickMinusButton,
  onClickPlusButton,
  ...props
}: CounterInputProps) {
  return (
    <C.Root>
      <C.MinusButton onClick={onClickMinusButton}>
        <Photo imageClassName={C.IconCSS} src={minusIcon} alt={'마이너스 버튼'} />
      </C.MinusButton>
      <Input css={C.InputCSS} id={id} type="number" value={value} {...props} aria-label={'옵션 수량 인풋'} />
      <C.PlusButton onClick={onClickPlusButton}>
        <Photo imageClassName={C.IconCSS} src={plusIcon} alt={'플러스 버튼'} />
      </C.PlusButton>
    </C.Root>
  );
};

export default RegularInput;

const S = {
  Root: styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 4px;
  `,

  Label: styled.label`
    ${hideWithA11y}
  `,
};

const C = {
  // CounterInput 의 style 이므로 앞글자 C 로 시작
  Root: styled.div`
    display: flex;

    width: 100px;
    height: 32px;

    border: 1px solid #d6d6d6;
    background-color: #fff;

    text-align: center;
  `,

  InputCSS: css`
    flex: 1 1 50%;
    width: 50%;

    border: none;

    font-size: 15px;
    font-weight: 700;
    line-height: 26px;
    color: #000;
    vertical-align: top;
    text-align: center;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type='number'] {
      -moz-appearance: textfield;
    }
  `,

  MinusButton: styled(Button)`
    display: flex;
    flex: 0 1 25%;
    justify-content: center;
    align-items: center;

    background-color: #ffffff;
    border: none;
    border-right: 1px solid #d8d8d8;
  `,

  PlusButton: styled(Button)`
    display: flex;
    flex: 0 1 25%;
    justify-content: center;
    align-items: center;

    background-color: #ffffff;
    border: none;
    border-left: 1px solid #d8d8d8;
  `,

  IconCSS: css`
    display: block;

    width: 13px;
    height: 13px;
  `,
};
