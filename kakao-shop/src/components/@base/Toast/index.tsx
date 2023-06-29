import type { ReactNode } from "react";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import Toast from "./libs";

const ToastComponent = new Toast({
  ToastItem: ({ children, isShow }) => (
    <AnimatePresence>
      {isShow && (
        <>
          <Container
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
          >
            {children}
          </Container>
        </>
      )}
    </AnimatePresence>
  ),
});

export default ToastComponent;

const Container = styled(motion.div)`
  padding: 16px 30px;
  background-color: #1e1e1e;
  margin: 0 16px 16px 16px;
  color: #ffffff;
  border-radius: 10px;
`;
