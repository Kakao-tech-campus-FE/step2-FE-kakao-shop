import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Button } from '@components/@base';
import { RegularInput } from '@components/@molecules';

import useLoginForm from '@hooks/ui/useLoginForm';

const LoginForm = () => {
  const {
    state: { email, password, errorMessage },
    handler: { onChangeEmail, onChangePassword, onSubmit },
  } = useLoginForm();
  return (
    <S.Root>
      <S.Container onSubmit={onSubmit}>
        <RegularInput.HiddenLabel
          value={email}
          onChange={onChangeEmail}
          key={'이메일 (아이디)'}
          placeholder={'이메일'}
          css={S.InputStyle}>
          {'이메일 (아이디)'}
        </RegularInput.HiddenLabel>
        <RegularInput.HiddenLabel
          value={password}
          onChange={onChangePassword}
          key={'비밀번호'}
          placeholder={'비밀번호'}
          type={'password'}
          css={S.InputStyle}>
          {'비밀번호'}
        </RegularInput.HiddenLabel>
        {errorMessage !== '' && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
        <Button css={S.ButtonStyle}>로그인</Button>
        <S.Link to="/signup">회원가입</S.Link>
      </S.Container>
    </S.Root>
  );
};

export default LoginForm;

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
