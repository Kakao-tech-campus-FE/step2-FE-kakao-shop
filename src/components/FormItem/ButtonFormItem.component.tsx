import { FC, useId } from "react";

interface ButtonFormItemProps {
  label: string;
  type: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonFormItem: FC<ButtonFormItemProps> = ({ label, type, onClick }) => {
  const uid = useId();

  return (
    <>
      <label htmlFor={uid}>{label}</label>
      <button id={uid} type={type} onClick={onClick} />
    </>
  );
};

export default ButtonFormItem;
