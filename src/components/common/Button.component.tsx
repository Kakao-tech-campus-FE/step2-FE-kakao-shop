import { ButtonHTMLAttributes, FC, MouseEvent, PropsWithChildren } from "react";
import classnames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "none";
  className?: string;
  onClick: (e: MouseEvent) => void;
}

const COLOR = {
  primary: "bg-blue-500 hover:bg-blue-600 text-white",
  secondary: "bg-green-500 hover:bg-green-600 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white",
  warning: "bg-yellow-500 hover:bg-yellow-600 text-white",
  info: "bg-gray-500 hover:bg-gray-600 text-white",
  light: "bg-white hover:bg-gray-100 text-black",
  dark: "bg-black hover:bg-gray-900 text-white",
  none: "",
} as const;

const Button: FC<PropsWithChildren<ButtonProps>> = ({
  color = "primary",
  className,
  children,
  onClick,
  ...props
}) => {
  const onClickPreventDefault = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick(e);
  };
  return (
    <button
      className={classnames(COLOR[color], className)}
      onClick={onClickPreventDefault}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
