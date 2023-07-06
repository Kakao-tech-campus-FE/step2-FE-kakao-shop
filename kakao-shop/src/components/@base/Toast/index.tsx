import styled from '@emotion/styled';
import { AnimatePresence, motion } from 'framer-motion';
import { Fragment } from 'react';

import Toast from './libs';

const ToastComponent = new Toast({
  ToastItem: ({ children, isShow }) => (
    // AnimatePresence의 경우 토스트 컴포넌트가 unmount 될때 exit 애니메이션을 발생시킨다.
    <AnimatePresence>
      {isShow && (
        <Fragment>
          <Container initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }}>
            {children}
          </Container>
        </Fragment>
      )}
    </AnimatePresence>
  ),
});

export default ToastComponent;

const Container = styled(motion.div)`
  margin: 0 16px 16px 16px;
  padding: 16px 30px;

  background-color: #1e1e1e;
  border-radius: 10px;

  color: #ffffff;
`;
