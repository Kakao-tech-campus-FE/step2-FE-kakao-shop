import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { PropsWithChildren } from 'react';
import { useMemo, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { useOnClickOutside } from '@hooks/@common/useOnClickOutside';

export type ModalProps = {
  visible: boolean;
  onModalClose: () => void;
};

const Modal = ({ children, visible = false, onModalClose }: PropsWithChildren<ModalProps>) => {
  const ref = useRef<HTMLDivElement>(null);

  const element = useMemo(() => {
    return document.createElement('div');
  }, []);

  useOnClickOutside(ref, onModalClose);

  useEffect(() => {
    if (!visible) return;

    document.body.appendChild(element);
    return () => {
      document.body.removeChild(element);
    };
  }, [visible]);

  return ReactDOM.createPortal(
    <S.BackgroundDimmed visible={visible}>
      <S.ModalContainer ref={ref}>{children}</S.ModalContainer>
    </S.BackgroundDimmed>,
    element,
  );
};

export default Modal;

const S = {
  BackgroundDimmed: styled.div<{ visible?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.4);

    ${({ visible }) => css`
      display: ${visible ? 'block' : 'none'};
    `}
  `,

  ModalContainer: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;

    background-color: #fff;

    transform: translate(-50%, -50%);
  `,
};
