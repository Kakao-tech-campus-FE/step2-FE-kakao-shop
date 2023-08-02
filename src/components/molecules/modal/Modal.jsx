import styled from "styled-components";
import Portal from "@/components/atoms/portal/Portal.jsx";
import { useRef, useEffect } from "react";
import Close from "@/assets/Close.jsx";
import useOutsideClick from "@/hooks/useOutsideClick.js";
import PropTypes from "prop-types";

const Styled = {
  Backdrop: styled.section`
    position: fixed;
    top: 0;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
  `,
  Container: styled.article`
    position: relative;
    padding: 3rem;
    background-color: white;
    color: ${({ theme }) => theme.color.black};
    line-height: 150%;
    border-radius: 0.25rem;
  `,
  CloseButton: styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: white;
  `,
};

function Modal({ setIsOpen, children, ...props }) {
  const modalRef = useRef();
  useOutsideClick(modalRef, () => setIsOpen(false));

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: ${scroll};
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);
  return (
    <Portal>
      <Styled.Backdrop>
        <Styled.Container ref={modalRef} {...props}>
          <Styled.CloseButton onClick={() => setIsOpen(false)}>
            <Close size={24} />
          </Styled.CloseButton>
          {children}
        </Styled.Container>
      </Styled.Backdrop>
    </Portal>
  );
}

Modal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
