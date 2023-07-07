import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Button } from '@components/@base';
import { RegularInput } from '@components/@molecules';
import EmailCheckForm from '@components/domains/SignUp/EmailCheckForm';

import useSignUpForm from '@hooks/ui/useSignUpForm';

const SignUpForm = () => {
  const {
    state: { email, nickname, password, confirmPassword, errorMessage, isUniqueEmail },
    handler: {
      onChangeEmail,
      onChangeNickname,
      onChangePassword,
      onChangeConfirmPassword,
      onSignUpSubmit,
      onEmailDuplicateCheck,
    },
  } = useSignUpForm();

  return (
    <S.Root>
      <S.Container onSubmit={onSignUpSubmit}>
        <EmailCheckForm
          email={email}
          isUniqueEmail={isUniqueEmail}
          onChangeEmail={onChangeEmail}
          onEmailDuplicateCheck={onEmailDuplicateCheck}
        />

        <RegularInput.HiddenLabel
          key={'이름'}
          placeholder={'이름'}
          css={S.InputStyle}
          value={nickname}
          onChange={onChangeNickname}
          tabIndex={0}>
          {'이름'}
        </RegularInput.HiddenLabel>

        <RegularInput.HiddenLabel
          type={'password'}
          key={'비밀번호'}
          placeholder={'비밀번호'}
          css={S.InputStyle}
          value={password}
          onChange={onChangePassword}
          tabIndex={0}>
          {'비밀번호'}
        </RegularInput.HiddenLabel>

        <RegularInput.HiddenLabel
          type={'password'}
          key={'비밀번호 확인'}
          placeholder={'비밀번호 확인'}
          css={S.InputStyle}
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
          tabIndex={0}>
          {'비밀번호 확인'}
        </RegularInput.HiddenLabel>

        {errorMessage !== '' && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

        <Button css={S.ButtonStyle} tabIndex={0}>
          회원가입
        </Button>

        <S.Link to="/login" tabIndex={0}>
          로그인
        </S.Link>
      </S.Container>
    </S.Root>
  );
};

export default SignUpForm;

const S = {
  Root: styled.section`
    width: 580px;

    box-sizing: border-box;
    margin: 40px auto 42px;
    padding: 0 69px;

    border: 1px solid rgba(0, 0, 0, 0.12);

    font-size: 12px;
  `,
  Container: styled.form`
    position: relative;

    height: 100%;

    box-sizing: border-box;
    padding: 55px 0 50px;
  `,
  EmailCheckContainer: styled.div<{ isEmailCheckContainerFocus: boolean }>`
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
  EmailCheckInputStyle: css`
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

  InputStyle: css`
    position: relative;

    width: 100%;
    min-height: 45px;

    box-sizing: border-box;
    margin-bottom: 12px;
    padding: 10px 0 8px;

    border: solid #ccc;
    border-width: 0 0 2px;

    background-color: transparent;

    font-size: 18px;
    line-height: 25px;
    color: #191919;
    letter-spacing: 0;

    caret-color: #191919; // input focus 커서 색상

    &:focus {
      border: solid #191919;
      border-width: 0 0 2px;
    }
  `,
  ButtonStyle: css`
    width: 100%;
    height: 50px;

    margin-top: 20px;

    background-color: #fee500;
    border-radius: 4px;

    font-weight: 400;
    font-size: 16px;
    line-height: 51px;
    color: #191919;
  `,
  Link: styled(Link)`
    display: inline-block;

    width: 100%;

    margin-top: 20px;

    text-align: center;
    color: #333;
    font-size: 14px;

    &:focus {
      border: 2px solid #0047ab;
    }
  `,
  ErrorMessage: styled.p`
    margin-top: 10px;
    padding: 20px;

    background-color: #f0f0f0;

    font-size: 14px;
    line-height: 20px;
    color: #e65f3e;
  `,
};
