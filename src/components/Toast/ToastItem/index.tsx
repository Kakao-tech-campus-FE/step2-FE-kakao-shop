import { useEffect, useState } from "react";
import { styled } from "styled-components";

type ToastData = {
  id: number;
  type: "success" | "error" | "warning";
  message: string;
};

type Props = { background?: string; visible?: number };

const ToastItem = ({ setToastList, toastData, backgroundColor, icon }: any) => {
  const { id, message } = toastData;
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setToastList((prev: ToastData[]) => {
          return prev.filter((item: ToastData) => item.id !== id);
        });
      }, 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Toast visible={visible ? 1 : 0} background={backgroundColor}>
      <IconWrapper>{icon}</IconWrapper>
      {message}
    </Toast>
  );
};

export default ToastItem;

const Toast = styled.div<Props>`
  background-color: ${({ background }) => background};
  border: 1px solid ${({ background }) => background};
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  width: 280px;
  height: 50px;
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 10px;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: translateY(${({ visible }) => (visible ? "0%" : "-50%")});
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
