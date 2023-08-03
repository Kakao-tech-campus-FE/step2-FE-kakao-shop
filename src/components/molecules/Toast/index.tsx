import styled from "styled-components";
import ToastItem from "./ToastItem";
import { ErrorIcon, SuccessIcon, WarningIcon } from "@components/Icons";

export interface ToastData {
  id: number;
  type: "success" | "error" | "warning";
  message: string;
}

interface Props {
  toastList: ToastData[];
  setToastList: React.Dispatch<React.SetStateAction<ToastData[]>>;
}

const Toast = ({ toastList, setToastList }: Props) => {
  const getBackgroundColor = (type: string) => {
    switch (type) {
      case "success":
        return "#28a745";
      case "error":
        return "#dc3545";
      case "warning":
        return "#f0ad4e";
      default:
        return "";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <SuccessIcon />;
      case "error":
        return <ErrorIcon />;
      case "warning":
        return <WarningIcon />;
      default:
        return "";
    }
  };

  return (
    <Wrapper>
      {toastList.map((item: ToastData) => {
        return (
          <ToastItem
            key={item.id}
            setToastList={setToastList}
            toastData={item}
            backgroundColor={getBackgroundColor(item.type)}
            icon={getIcon(item.type)}
          />
        );
      })}
    </Wrapper>
  );
};

export default Toast;

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  z-index: 10;
  gap: 12px;
`;
