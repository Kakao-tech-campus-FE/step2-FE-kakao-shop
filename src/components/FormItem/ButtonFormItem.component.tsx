import { FC } from "react";

interface ButtonFormItemProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const ButtonFormItem: FC<ButtonFormItemProps> = ({
  children,
  type,
  onClick,
  color,
}) => {
  const colors = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    success: "bg-green-500 hover:bg-green-600",
    danger: "bg-red-500 hover:bg-red-600",
    warning: "bg-yellow-500 hover:bg-yellow-600",
    info: "bg-indigo-500 hover:bg-indigo-600",
    light: "bg-gray-100 hover:bg-gray-200",
    dark: "bg-gray-800 hover:bg-gray-900",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-lg py-4 px-8 ${colors[color]}`}
    >
      {children}
    </button>
  );
};

export default ButtonFormItem;
