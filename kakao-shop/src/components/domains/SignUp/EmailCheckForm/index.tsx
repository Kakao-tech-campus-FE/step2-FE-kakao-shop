import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRef, useState } from 'react';

import { Button } from '@components/@base';
import { RegularInput } from '@components/@molecules';

type Props = {
  email: string;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const EmailCheckForm = ({ email, onChangeEmail }: Props) => {
  const divRef = useRef<HTMLFormElement>(null);
  const [isEmailCheckContainerFocus, setIsEmailCheckContainerFocus] = useState(false);

  const handleFocus = () => {
    if (divRef.current) setIsEmailCheckContainerFocus(true);
  };

  const handleBlur = () => {
    if (divRef.current) setIsEmailCheckContainerFocus(false);
  };

  return (
    <S.EmailCheckContainer
      ref={divRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      isEmailCheckContainerFocus={isEmailCheckContainerFocus}>
      <RegularInput.HiddenLabel
        key={'이메일 (아이디)'}
        placeholder={'이메일'}
        RootClassName={S.InputRootStyle}
        InputClassName={S.EmailCheckInputStyle}
        value={email}
        onChange={onChangeEmail}
        tabIndex={0}>
        {'이메일 (아이디)'}
      </RegularInput.HiddenLabel>
      <Button tabIndex={0} css={S.ButtonStyle}>
        중복확인
      </Button>
    </S.EmailCheckContainer>
  );
};

export default EmailCheckForm;

const S = {
  EmailCheckContainer: styled.form<{ isEmailCheckContainerFocus: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 12px;

    ${({ isEmailCheckContainerFocus }) =>
      isEmailCheckContainerFocus
        ? css`
            border: solid #191919;
            border-width: 0 0 2px;
          `
        : css`
            border: solid #ccc;
            border-width: 0 0 2px;
          `}
  `,
  InputRootStyle: css`
    flex-grow: 1;
  `,
  EmailCheckInputStyle: css`
    flex-grow: 1;
    position: relative;

    width: 100%;
    min-height: 45px;

    box-sizing: border-box;
    padding: 10px 0 6px;

    border: none;
    background-color: transparent;

    font-size: 18px;
    line-height: 25px;
    color: #191919;
    letter-spacing: 0;

    caret-color: #191919; // input focus 커서 색상
  `,
  ButtonStyle: css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 40px;

    margin-left: 6px;

    background-color: #fee500;
    border-radius: 4px;

    font-weight: 400;
    font-size: 12px;
    line-height: 51px;
    color: #191919;

    &:focus {
      border: 2px solid #0047ab;
    }
  `,
};
