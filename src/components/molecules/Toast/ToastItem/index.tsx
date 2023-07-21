import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { ToastData } from "..";

interface Props {
  background?: string;
  visible?: number;
}

const ToastItem = ({ setToastList, toastData, backgroundColor, icon }: any) => {
  const { id, message } = toastData;
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    setVisible(1);
    const timer = setTimeout(() => {
      setVisible(0);
      setTimeout(() => {
        setToastList((prev: ToastData[]) => {
          return prev.filter((item: ToastData) => item.id !== id);
        });
      }, 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Toast visible={visible} background={backgroundColor}>
      <IconWrapper>{icon}</IconWrapper>
      {message}
    </Toast>
  );
};

export default ToastItem;

const Toast = styled.div<Props>`
  display: flex;
  align-items: center;
  width: 280px;
  height: 50px;
  padding-left: 10px;
  border: 1px solid ${({ background }) => background};
  border-radius: 5px;
  background-color: ${({ background }) => background};
  color: #fff;
  font-size: 14px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  opacity: ${({ visible }) => visible};
  transform: translateY(${({ visible }) => (visible ? "0%" : "50%")});
  transition: opacity 300ms, transform 300ms;
`;

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 16px;
  svg {
    width: 30px;
    height: 30px;
    filter: invert(98%) sepia(27%) saturate(171%) hue-rotate(256deg)
      brightness(117%) contrast(100%);
  }
`;
