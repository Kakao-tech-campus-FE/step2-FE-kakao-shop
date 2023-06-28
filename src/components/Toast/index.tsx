import React from "react";
import styled from "styled-components";
import ToastItem from "./ToastItem";
import { ErrorIcon, SuccessIcon, WarningIcon } from "@components/Icons";

const Wrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  z-index: 10;
  gap: 12px;
`;

type ToastData = {
  id: number;
  type: "success" | "error" | "warning";
  message: string;
};

type Props = {
  toastList: ToastData[];
  setToastList: React.Dispatch<React.SetStateAction<ToastData[]>>;
};

const Toast = ({ toastList, setToastList }: Props) => {
  return (
    <Wrapper>
      {toastList.map((item: ToastData, index: number) => {
        let backgroundColor: string;
        let icon;

        switch (item.type) {
          case "success":
            backgroundColor = "#28a745";
            icon = <SuccessIcon />;
            break;
          case "error":
            backgroundColor = "#dc3545";
            icon = <ErrorIcon />;
            break;
          case "warning":
            backgroundColor = "#f0ad4e";
            icon = <WarningIcon />;
            break;
          default:
            backgroundColor = "";
        }
        return (
          <ToastItem
            key={item.id}
            setToastList={setToastList}
            toastData={item}
            backgroundColor={backgroundColor}
            icon={icon}
          />
        );
      })}
    </Wrapper>
  );
};

export default Toast;
