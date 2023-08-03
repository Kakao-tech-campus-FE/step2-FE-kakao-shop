import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Button } from '@components/atom';
import Modal from '@components/atom/Modal';
import type { ModalProps } from '@components/atom/Modal';

type Props = ModalProps & {
  onModalConfirm?: () => void;
};

const LoginModal = ({ visible = false, onModalClose, onModalConfirm }: Props) => {
  return (
    <Modal visible={visible} onModalClose={onModalClose}>
      <S.Body>
        <S.Text>
          <span>로그인이 필요한 메뉴입니다.</span>
          <br />
          <span>로그인 하시겠습니까?</span>
        </S.Text>
      </S.Body>

      <S.ButtonContainer>
        <Button onClick={onModalClose} css={S.ButtonCSS}>
          취소
        </Button>
        <Button onClick={onModalConfirm} css={S.ButtonCSS}>
          확인
        </Button>
      </S.ButtonContainer>
    </Modal>
  );
};

export default LoginModal;

const S = {
  Body: styled.div`
    padding: 40px 34px 30px;
  `,

  Text: styled.div`
    width: 250px;

    line-height: 20px;
    color: #666;
    letter-spacing: -1px;
  `,

  ButtonContainer: styled.div`
    display: flex;
  `,

  ButtonCSS: css`
    width: 100%;
    height: 50px;

    border-top: 1px solid #ededed;

    font-weight: 500;
    font-size: 16px;
    line-height: 50px;
    color: #333;
    text-align: center;

    border-left: 1px solid #ededed;
  `,
};
