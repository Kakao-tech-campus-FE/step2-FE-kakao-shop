import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Portal from "@/components/atoms/portal/Portal.jsx";

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: darkblue;
  color: white;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;

const ToastContainer = styled.div`
  position: fixed;
  z-index: 2;

  background-color: white;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);

  border-radius: 0.25rem;

  &.top {
    top: 1rem;
  }

  &.bottom {
    bottom: 1rem;
  }

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }
`;

const Note = styled.div`
  padding: 1rem 2rem;

  color: white;
  font-weight: 500;
`;

function Toast({ label, notification, time, position, color }) {
  const [isOpen, setIsOpen] = useState(false);

  const setPositionStyle = (position) => {
    switch (position) {
      case "Top-Left":
        return "top left";
      case "Top-Right":
        return "top right";
      case "Bottom-Left":
        return "bottom left";
      case "Bottom-Right":
        return "bottom right";
      default:
        return "top left";
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, time);

    return () => clearTimeout(timer);
  }, [isOpen, time]);

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
        style={{ backgroundColor: color }}
      >
        {label}
      </Button>
      {isOpen && (
        <Portal>
          <ToastContainer
            className={setPositionStyle(position)}
            style={{ backgroundColor: color }}
          >
            <Note>{notification}</Note>
          </ToastContainer>
        </Portal>
      )}
    </>
  );
}

Toast.propTypes = {
  label: PropTypes.string,
  notification: PropTypes.string,
  time: PropTypes.number,
  position: PropTypes.string,
  color: PropTypes.string,
};

Toast.defaultProps = {
  label: "default",
  notification: "default notification",
  time: 1000,
  position: "Top-Left",
  color: "blue",
};

export default Toast;
