import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';

import Toast from './libs';

const ToastComponent = new Toast({
  ToastItem: ({ children, isShow }) => (
    // AnimatePresence의 경우 토스트 컴포넌트가 unmount 될때 exit 애니메이션을 발생시킨다.
    <AnimatePresence>
      {isShow && (
        <S.Root>
          <S.Container initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}>
            {children}
          </S.Container>
        </S.Root>
      )}
    </AnimatePresence>
  ),
});

export default ToastComponent;

const S = {
  Root: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Container: styled(motion.div)`
    width: 45%;

    margin: 0 16px 16px 16px;
    padding: 16px 30px;

    background-color: #1e1e1e;
    border-radius: 10px;

    color: #ffffff;

    @media (max-width: 768px) {
      width: 100%;
    }
  `,
};
